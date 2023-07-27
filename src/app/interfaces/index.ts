import { CharacterState } from './characters/character.interface';
import { MovieState } from './movies/movies.interface';
export * from './movies/movies.interface';
export * from './characters/character.interface';

export interface RootStoreState {
  movies: MovieState;
  characters: CharacterState;
}
