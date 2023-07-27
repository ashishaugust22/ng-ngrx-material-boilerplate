import { createAction, props } from '@ngrx/store';
import { Character } from '../../../app/interfaces';

// LOAD MOVIE
export const LOAD_CHARACTER = '[Character] Load Character';
export const LOAD_CHARACTER_FAIL = '[Character] Load Character Fail';
export const LOAD_CHARACTER_SUCCESS = '[Character] Load Character Success';

export const loadCharacterAction = createAction(
  LOAD_CHARACTER,
  props<{ characterId: string }>()
);

export const loadCharacterFailAction = createAction(
  LOAD_CHARACTER_FAIL,
  props<{ payload: any }>()
);

export const loadCharacterSuccessAction = createAction(
  LOAD_CHARACTER_SUCCESS,
  props<{ payload: Character }>()
);

export default {
  loadCharacterAction,
  loadCharacterFailAction,
  loadCharacterSuccessAction,
};
