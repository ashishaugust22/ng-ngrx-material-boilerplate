import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListItemComponent } from './movie-list-item.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [MovieListItemComponent],
  imports: [CommonModule, MatCardModule],
  exports: [MovieListItemComponent],
})
export class MovieListItemModule {}
