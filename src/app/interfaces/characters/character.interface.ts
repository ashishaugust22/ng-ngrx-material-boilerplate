export interface Character {
  id: number;
  birth_year: string;
  eye_color: string;
  films: string[]; // https://swapi.dev/api/films/1/
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string; // https://swapi.dev/api/planets/1/
  mass: string; // "77"
  name: string;
  skin_color: string;
  created: string; // "2014-12-09T13:50:51.644000Z"
  edited: string; // "2014-12-10T13:52:43.172000Z"
  species: string[]; // https://swapi.dev/api/species/1/
  starships: string[]; // https://swapi.dev/api/starships/12/
  url: string; // https://swapi.dev/api/people/1/
  vehicles: string[]; // https://swapi.dev/api/vehicles/14/
}

export interface CharacterState {
  entities: { [id: string]: Character };
  error: boolean;
  loading: boolean;
}
