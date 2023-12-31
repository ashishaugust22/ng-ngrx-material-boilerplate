import { Component, Input } from '@angular/core';
import { Movie } from '../../interfaces/movies/movies.interface';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.scss'],
})
export class MovieListItemComponent {
  @Input() movie: Partial<Movie> = {};
}
