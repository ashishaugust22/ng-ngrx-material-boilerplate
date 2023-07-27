import { createSelector } from '@ngrx/store';
import { CharacterState } from '../../../app/interfaces';
import { getCharacterState } from '../../reducers';

const getCharacterEntities = createSelector(
  getCharacterState,
  (character: CharacterState) => character.entities
);

export const getAllCharacters = createSelector(
  getCharacterEntities,
  (entities) => Object.keys(entities).map((id) => entities[parseInt(id, 10)])
);

export const getCharacterById = (characterId: string) =>
  createSelector(getCharacterEntities, (entities) => entities[characterId]);

export const getCharacterLoading = createSelector(
  getCharacterState,
  (character: CharacterState) => character.loading
);
export const getCharacterError = createSelector(
  getCharacterState,
  (character: CharacterState) => character.error
);
