import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import Movie from 'src/app/model/movie/movie';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnChanges, OnInit {
  @Input() movie: Movie;

  moviePosterUrl: string;

  ngOnInit(): void {
    this.updateMoviePosterUrl();
  }

  ngOnChanges(): void {
    this.updateMoviePosterUrl();
  }

  private updateMoviePosterUrl() {
    this.moviePosterUrl = this.movie ? `https://image.tmdb.org/t/p/w500${this.movie.poster_path}` : '';
  }
}
