import { Action, createReducer, on } from '@ngrx/store';
import { MovieState } from '../../../app/interfaces';
import * as MovieActions from '../../actions/movie/movie.action';

export const initialState: MovieState = {
  entities: {},
  error: false,
  loading: false,
};

export const movieReducer = createReducer(
  initialState,
  on(MovieActions.loadMovieAction, (state) => ({ ...state, loading: true })),
  on(MovieActions.loadMovieFailAction, (state) => {
    return {
      ...state,
      loading: false,
      error: true,
    };
  }),
  on(MovieActions.loadMovieSuccessAction, (state, action) => {
    return {
      loading: false,
      error: false,
      entities: { ...state.entities, [action.payload.id]: action.payload },
    };
  })
);
