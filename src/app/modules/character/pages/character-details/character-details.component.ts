import { Component } from '@angular/core';
import { Character, CharacterState } from '../../../../interfaces';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  getCharacterById,
  getCharacterLoading,
  loadCharacterAction,
} from '../../../../../store';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent {
  characterId: string = '';
  characterDetails: Partial<Character> = {};
  isLoading: boolean = false;
  constructor(
    private routerSnapshot: ActivatedRoute,
    private store: Store<CharacterState>
  ) {}

  ngOnInit(): void {
    this.getCharacterUrl();
    this.getLoadingStateFromStore();
  }

  getCharacterUrl(): void {
    if (this.routerSnapshot.snapshot.params.hasOwnProperty('id')) {
      this.characterId = this.routerSnapshot.snapshot.params['id'];
      this.getMovieFromStore();
    }
  }

  getMovieFromStore() {
    this.store
      .select(getCharacterById(this.characterId))
      .subscribe((character) => {
        if (!character) {
          this.getMovie();
        } else {
          this.characterDetails = character;
        }
      });
  }

  getMovie() {
    this.store.dispatch(loadCharacterAction({ characterId: this.characterId }));
  }

  getCharacterRouter(url: string): string {
    const urlSplit = url.split('/');
    return `/movies/${urlSplit[urlSplit.length - 2]}`;
  }

  getLoadingStateFromStore() {
    this.store.select(getCharacterLoading).subscribe((loading) => {
      this.isLoading = loading;
    });
  }
}
