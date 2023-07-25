import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from '../../../../interfaces';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movieUrl: string = '';
  movieDetails: Partial<MovieDetails> = {};
  constructor(private routerSnapshot: ActivatedRoute) {}

  ngOnInit(): void {
    this.getMovieUrl();
  }

  getMovieUrl(): void {
    if (this.routerSnapshot.snapshot.queryParams.hasOwnProperty('url')) {
      this.movieUrl = this.routerSnapshot.snapshot.queryParams['url'];
      this.getMovieDetails();
    }
  }

  getMovieDetails(): void {
    this.movieDetails = {
      characters: ['https://swapi.dev/api/people/1/'],
      created: '2014-12-10T14:23:31.880000Z',
      director: 'George Lucas',
      edited: '2014-12-12T11:24:39.858000Z',
      episode_id: 4,
      opening_crawl:
        "It is a period of civil war.\n\nRebel spaceships, striking\n\nfrom a hidden base, have won\n\ntheir first victory against\n\nthe evil Galactic Empire.\n\n\n\nDuring the battle, Rebel\n\nspies managed to steal secret\r\nplans to the Empire's\n\nultimate weapon, the DEATH\n\nSTAR, an armored space\n\nstation with enough power\n\nto destroy an entire planet.\n\n\n\nPursued by the Empire's\n\nsinister agents, Princess\n\nLeia races home aboard her\n\nstarship, custodian of the\n\nstolen plans that can save her\n\npeople and restore\n\nfreedom to the galaxy....",
      planets: ['https://swapi.dev/api/planets/1/'],
      producer: 'Gary Kurtz, Rick McCallum',
      release_date: '1977-05-25',
      species: ['https://swapi.dev/api/species/1/'],
      starships: ['https://swapi.dev/api/starships/2/'],
      title: 'A New Hope',
      url: 'https://swapi.dev/api/films/1/',
      vehicles: ['https://swapi.dev/api/vehicles/4/'],
    };
  }
}
