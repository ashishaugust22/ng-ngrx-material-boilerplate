import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListingComponent } from './pages/movie-listing/movie-listing.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';

const routes: Routes = [
  {
    path: '',
    component: MovieListingComponent,
  },
  {
    path: ':id',
    component: MovieDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieListingRoutingModule {}
