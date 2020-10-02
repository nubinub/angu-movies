import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import Movie from 'src/app/model/movie/movie';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() movie: Movie;

  @ViewChild(MatTooltip)tooltip: MatTooltip;

  constructor(private router: Router) {
  }

  goToMovie() {
    this.tooltip.ngOnDestroy();
    this.router.navigate(['movies', this.movie.id]);
  }
}
