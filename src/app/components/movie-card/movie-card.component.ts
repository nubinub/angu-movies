import { Component, OnInit, Input } from '@angular/core';
import Movie from 'src/app/model/movie/movie';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie;

  constructor() {}

  ngOnInit(): void {
  }

  getMoviePoster(): string {
    return  this.movie ? `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}` : '';
  }
}
