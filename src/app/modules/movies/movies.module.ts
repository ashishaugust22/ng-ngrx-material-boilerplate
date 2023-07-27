import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieListingRoutingModule } from './movies.routing';
import { MovieListingComponent } from './pages/movie-listing/movie-listing.component';
import { MovieListItemModule } from '../../components/movie-list-item/movie-list-item.module';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../../pipes/pipes.module';
import { LoaderModule } from '../../components/loader/loader.module';
import { CharacterListItemModule } from '../../components/character-list-item/character-list-item.module';

const COMMON_COMPONENTS_MODULES = [
  MovieListItemModule,
  LoaderModule,
  CharacterListItemModule,
];

@NgModule({
  declarations: [MovieListingComponent, MovieDetailsComponent],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    MovieListingRoutingModule,

    ...COMMON_COMPONENTS_MODULES,
  ],
})
export class MovieListingModule {}
