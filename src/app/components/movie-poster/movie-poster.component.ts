import { Component, Input, OnChanges } from '@angular/core';
import Movie from 'src/app/model/movie/movie';

@Component({
  selector: 'movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.scss']
})
export class MoviePosterComponent implements OnChanges {

  @Input() movie: Movie;

  moviePosterUrl: string;

  ngOnChanges() {
    this.moviePosterUrl = this.movie ? `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}` : '';
  }
}
