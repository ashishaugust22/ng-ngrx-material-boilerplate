import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { MovieService } from '../../../app/services/movie/movie.service';
import * as MovieAction from '../../actions/movie/movie.action';

@Injectable()
export class MovieEffects {
  loadMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieAction.LOAD_MOVIE),
      exhaustMap((payload: any) => {
        return this.movieService.getMovie$(payload.movieId).pipe(
          map((movie) => ({
            type: MovieAction.LOAD_MOVIE_SUCCESS,
            payload: movie,
          })),
          catchError(() => EMPTY)
        );
      })
    )
  );

  constructor(private actions$: Actions, private movieService: MovieService) {}
}
