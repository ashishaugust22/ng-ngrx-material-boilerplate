import { createSelector } from '@ngrx/store';
import { MovieState } from '../../../app/interfaces';
import { getMovieState } from '../../reducers';

const getMovieEntities = createSelector(
  getMovieState,
  (movies: MovieState) => movies.entities
);

export const getAllMovie = createSelector(getMovieEntities, (entities) =>
  Object.keys(entities).map((id) => entities[parseInt(id, 10)])
);

export const getMovieById = (movieId: string) =>
  createSelector(getMovieEntities, (entities) => entities[movieId]);

export const getMovieLoading = createSelector(
  getMovieState,
  (movies: MovieState) => movies.loading
);
export const getMovieError = createSelector(
  getMovieState,
  (movies: MovieState) => movies.error
);
