import { createAction, props } from '@ngrx/store';
import { Movie } from '../../../app/interfaces';

// LOAD MOVIE
export const LOAD_MOVIE = '[Movies] Load Movie';
export const LOAD_MOVIE_FAIL = '[Movies] Load Movie Fail';
export const LOAD_MOVIE_SUCCESS = '[Movies] Load Movie Success';

export const loadMovieAction = createAction(
  LOAD_MOVIE,
  props<{ movieId: string }>()
);

export const loadMovieFailAction = createAction(
  LOAD_MOVIE_FAIL,
  props<{ payload: any }>()
);

export const loadMovieSuccessAction = createAction(
  LOAD_MOVIE_SUCCESS,
  props<{ payload: Movie }>()
);

export default {
  loadMovieAction,
  loadMovieFailAction,
  loadMovieSuccessAction,
};
