import { Component, Input, OnChanges } from '@angular/core';
import Movie from 'src/app/model/movie/movie';
import { PosterService } from 'src/app/services/poster/poster.service';

@Component({
  selector: 'movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.scss']
})
export class MoviePosterComponent implements OnChanges {

  @Input() movie: Movie;

  moviePosterUrl: string;

  constructor(private posterService: PosterService) {
  }

  ngOnChanges() {
    this.moviePosterUrl = this.posterService.getMoviePosterUrl(this.movie);
  }
}
