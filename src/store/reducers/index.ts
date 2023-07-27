import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import {
  CharacterState,
  MovieState,
  RootStoreState,
} from '../../app/interfaces/';
import { movieReducer } from './movie/movie.reducer';
import { characterReducer } from './character/character.reducer';

export const reducers: ActionReducerMap<RootStoreState> = {
  movies: movieReducer,
  characters: characterReducer,
};

export const getMovieState = createFeatureSelector<MovieState>('movies');
export const getCharacterState =
  createFeatureSelector<CharacterState>('characters');
