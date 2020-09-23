import { Component, Input, OnChanges } from '@angular/core';
import Movie from 'src/app/model/movie/movie';
import { PosterService } from 'src/app/services/poster/poster.service';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnChanges {
  @Input() movie: Movie;

  moviePosterUrl: string;

  constructor(private posterService: PosterService) {
  }

  ngOnChanges(): void {
    this.moviePosterUrl = this.posterService.getMediaPosterUrl(this.movie);
  }
}
