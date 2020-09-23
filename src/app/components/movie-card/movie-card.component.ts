import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import Movie from 'src/app/model/movie/movie';
import { PosterService } from 'src/app/services/poster/poster.service';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnChanges, OnInit {
  @Input() movie: Movie;

  moviePosterUrl: string;

  constructor(private posterService: PosterService) {
  }

  ngOnInit(): void {
    this.updateMoviePosterUrl();
  }

  ngOnChanges(): void {
    this.updateMoviePosterUrl();
  }

  /**
   * Update the moviePosterUrl variable accodring to the movie
   */
  private updateMoviePosterUrl() {
    this.moviePosterUrl = this.posterService.getMediaPosterUrl(this.movie);
  }
}
