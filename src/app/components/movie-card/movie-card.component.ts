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
    this.moviePosterUrl = this.movie ? `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}` : '';
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.moviePosterUrl = changes.movie.currentValue ? `https://image.tmdb.org/t/p/w500/${changes.movie.currentValue.poster_path}` : '';
  }
}
