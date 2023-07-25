import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieListingRoutingModule } from './movies.routing';
import { MovieListingComponent } from './pages/movie-listing/movie-listing.component';
import { MovieListItemModule } from '../../components/movie-list-item/movie-list-item.module';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { RouterModule } from '@angular/router';

const COMMON_COMPONENTS_MODULES = [MovieListItemModule];

@NgModule({
  declarations: [MovieListingComponent, MovieDetailsComponent],
  imports: [
    CommonModule,
    RouterModule,
    MovieListingRoutingModule,
    ...COMMON_COMPONENTS_MODULES,
  ],
})
export class MovieListingModule {}
