import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, MoviesResponse } from '../../interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  baseUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  public getMovie$(id: string): Observable<Movie> {
    return new Observable((observer) => {
      const url = `${this.baseUrl}films/${id}`;
      this.http.get(url).subscribe((response: any) => {
        response.id = id;
        observer.next(response);
        observer.complete();
      });
    });
  }

  public getAllMovies$(): Observable<Movie[]> {
    return new Observable((observer) => {
      const url = `${this.baseUrl}films/`;
      this.http.get(url).subscribe((response: any) => {
        observer.next(response.results);
        observer.complete();
      });
    });
  }
}
