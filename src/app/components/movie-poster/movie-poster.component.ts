import { Component, OnInit, Input } from '@angular/core';
import Movie from 'src/app/model/movie';

@Component({
  selector: 'movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.scss']
})
export class MoviePosterComponent implements OnInit {

  @Input() movie: Movie;

  constructor() { }

  ngOnInit(): void {
  }

  getMoviePoster() {
    return  this.movie ? `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}` : '';
  }
}
