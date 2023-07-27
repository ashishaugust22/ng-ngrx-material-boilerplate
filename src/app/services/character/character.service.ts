import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../../interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  baseUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  public getCharacter$(id: string): Observable<Character> {
    return new Observable((observer) => {
      const url = `${this.baseUrl}people/${id}`;
      this.http.get(url).subscribe((response: any) => {
        response.id = id;
        observer.next(response);
        observer.complete();
      });
    });
  }

  public getAllCharacter$(): Observable<Character[]> {
    return new Observable((observer) => {
      const url = `${this.baseUrl}people/`;
      this.http.get(url).subscribe((response: any) => {
        observer.next(response.results);
        observer.complete();
      });
    });
  }
}
