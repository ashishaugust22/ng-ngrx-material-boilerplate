import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character, Movie, MovieState } from '../../../../interfaces';
import { Store } from '@ngrx/store';
import {
  getCharacterById,
  getMovieById,
  getMovieLoading,
} from '../../../../../store';
import {
  loadCharacterAction,
  loadMovieAction,
} from '../../../../../store/actions';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movieId: string = '';
  movieDetails: Partial<Movie> = {};
  isLoading: boolean = false;
  characters: { [id: string]: Character } = {};

  constructor(
    private routerSnapshot: ActivatedRoute,
    private store: Store<MovieState>
  ) {}

  ngOnInit(): void {
    this.getMovieUrl();
    this.getLoadingStateFromStore();
  }

  getMovieUrl(): void {
    if (this.routerSnapshot.snapshot.params.hasOwnProperty('id')) {
      this.movieId = this.routerSnapshot.snapshot.params['id'];
      this.getMovieFromStore();
    }
  }

  getMovieFromStore() {
    this.store.select(getMovieById(this.movieId)).subscribe((movie) => {
      if (!movie) {
        this.getMovie();
      } else {
        this.movieDetails = movie;
        movie.characters.forEach((character) => {
          this.getCharacterDetail$(character);
        });
      }
    });
  }

  getMovie() {
    this.store.dispatch(loadMovieAction({ movieId: this.movieId }));
  }

  getCharacterRouter(url: string): string {
    const urlSplit = url.split('/');
    return `/characters/${urlSplit[urlSplit.length - 2]}`;
  }

  getLoadingStateFromStore() {
    this.store.select(getMovieLoading).subscribe((loading) => {
      this.isLoading = loading;
    });
  }

  getCharacterDetail$(url: string) {
    const urlSplit = url.split('/');
    const id = urlSplit[urlSplit.length - 2];
    this.store.select(getCharacterById(id)).subscribe((character) => {
      if (character) {
        this.characters[id] = character;
      } else {
        this.store.dispatch(loadCharacterAction({ characterId: id }));
      }
    });
  }
}
