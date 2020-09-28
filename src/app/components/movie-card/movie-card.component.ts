import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { Router } from '@angular/router';
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

  @ViewChild(MatTooltip)tooltip: MatTooltip;

  constructor(private posterService: PosterService, private router: Router) {
  }

  ngOnChanges(): void {
    this.moviePosterUrl = this.posterService.getMediaPosterUrl(this.movie);
  }

  goToMovie() {
    this.tooltip.ngOnDestroy();
    this.router.navigate(['movies', this.movie.id]);
  }
}
