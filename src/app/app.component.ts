import { Component } from '@angular/core';
import movies from './mock/movies-mock';
import Movie from './model/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  movies: Movie[] = movies;
}
