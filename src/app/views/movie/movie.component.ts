import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Movie from 'src/app/model/movie/movie';
import { MovieService } from 'src/app/services/movie/movie.service';
import Cast from 'src/app/model/cast/cast';
import { Location } from '@angular/common';
import { forkJoin } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  public movie: Movie;

  public casts: Cast[];

  constructor(private route: ActivatedRoute, private movieService: MovieService, private location: Location) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      flatMap(
        params => forkJoin([
          this.movieService.getMovie(params.id),
          this.movieService.getCast(params.id),
        ])
      )
    ).subscribe(([movie, casts]) => {
      this.movie = movie;
      this.casts = casts.slice(0, 5);
    });
  }

  getBack() {
    this.location.back();
  }
}
