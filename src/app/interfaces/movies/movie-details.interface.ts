import { Character } from '../characters/character.interface';

export interface MovieDetails {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string; // date
  characters: string[]; // https://swapi.dev/api/people/1/
  url: string;
  created: string;
  edited: string;
  species: string[]; // https://swapi.dev/api/species/1/
  starships: string[]; // https://swapi.dev/api/starships/2/
  vehicles: string[]; // https://swapi.dev/api/vehicles/4/
  planets: string[]; // https://swapi.dev/api/planets/1/
}
