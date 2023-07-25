import { Component } from '@angular/core';
import { Character } from '../../../../interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent {
  characterUrl: string = '';
  characterDetails: Partial<Character> = {};
  constructor(private routerSnapshot: ActivatedRoute) {}

  ngOnInit(): void {
    this.getCharacterUrl();
  }

  getCharacterUrl(): void {
    if (this.routerSnapshot.snapshot.queryParams.hasOwnProperty('url')) {
      this.characterUrl = this.routerSnapshot.snapshot.queryParams['url'];
      this.getMovieDetails();
    }
  }

  getMovieDetails(): void {
    this.characterDetails = {
      birth_year: '19 BBY',
      eye_color: 'Blue',
      films: ['https://swapi.dev/api/films/1/'],
      gender: 'Male',
      hair_color: 'Blond',
      height: '172',
      homeworld: 'https://swapi.dev/api/planets/1/',
      mass: '77',
      name: 'Luke Skywalker',
      skin_color: 'Fair',
      created: '2014-12-09T13:50:51.644000Z',
      edited: '2014-12-10T13:52:43.172000Z',
      species: ['https://swapi.dev/api/species/1/'],
      starships: ['https://swapi.dev/api/starships/12/'],
      url: 'https://swapi.dev/api/people/1/',
      vehicles: ['https://swapi.dev/api/vehicles/14/'],
    };
  }
}
