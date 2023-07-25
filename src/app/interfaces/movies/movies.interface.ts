export interface MoviesResponse {
  count: number;
  next: null;
  previous: null;
  results: MoviesListItem[];
}

export interface MoviesListItem {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string; // date
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string; // date
  edited: string; // date
  url: string;
}
