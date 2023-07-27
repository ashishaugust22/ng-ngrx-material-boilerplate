import { Action, createReducer, on } from '@ngrx/store';
import { CharacterState } from '../../../app/interfaces';
import * as CharacterActions from '../../actions/character/character.action';

export const initialState: CharacterState = {
  entities: {},
  error: false,
  loading: false,
};

export const characterReducer = createReducer(
  initialState,
  on(CharacterActions.loadCharacterAction, (state) => ({
    ...state,
    loading: true,
  })),
  on(CharacterActions.loadCharacterFailAction, (state) => ({
    ...state,
    loading: false,
    error: true,
  })),
  on(CharacterActions.loadCharacterSuccessAction, (state, action) => ({
    loading: false,
    error: false,
    entities: { ...state.entities, [action.payload.id]: action.payload },
  }))
);
