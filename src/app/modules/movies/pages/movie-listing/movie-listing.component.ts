import { Component, OnInit } from '@angular/core';
import { Movie, MovieState } from '../../../../interfaces';
import { MovieService } from '../../../../services/movie/movie.service';
import { Store } from '@ngrx/store';
import { loadMovieSuccessAction } from '../../../../../store/actions';
import { getAllMovie, getMovieLoading } from '../../../../../store';

@Component({
  selector: 'app-movie-listing',
  templateUrl: './movie-listing.component.html',
  styleUrls: ['./movie-listing.component.scss'],
})
export class MovieListingComponent implements OnInit {
  movies: Movie[] = [];
  isLoading: boolean = false;
  isLoadingMovies: boolean = false;

  constructor(
    private movieService: MovieService,
    private store: Store<MovieState>
  ) {}

  ngOnInit(): void {
    this.getAllMoviesFromStore();
    this.getLoadingStateFromStore();
  }

  getAllMoviesFromStore() {
    this.store.select(getAllMovie).subscribe((movies) => {
      this.movies = movies;
      if (movies.length < 6 && !this.isLoadingMovies) {
        this.getAllMovies();
      }
    });
  }

  getLoadingStateFromStore() {
    this.store.select(getMovieLoading).subscribe((loading) => {
      this.isLoading = loading;
    });
  }

  getAllMovies() {
    this.isLoadingMovies = true;
    this.movieService.getAllMovies$().subscribe((movies) => {
      movies.forEach((movie) => {
        movie.id = +movie.url.split('/')[5];
        this.store.dispatch(loadMovieSuccessAction({ payload: movie }));
      });
      this.isLoadingMovies = false;
    });
  }
}
