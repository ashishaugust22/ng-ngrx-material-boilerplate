import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { CharacterService } from '../../../app/services/character/character.service';
import * as CharacterAction from '../../actions/character/character.action';

@Injectable()
export class CharacterEffects {
  loadCharacter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharacterAction.LOAD_CHARACTER),
      exhaustMap((payload: any) => {
        return this.characterService.getCharacter$(payload.characterId).pipe(
          map((character) => ({
            type: CharacterAction.LOAD_CHARACTER_SUCCESS,
            payload: character,
          })),
          catchError(() => EMPTY)
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private characterService: CharacterService
  ) {}
}
