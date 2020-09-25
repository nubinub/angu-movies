import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Movie from 'src/app/model/movie/movie';
import { MovieService } from 'src/app/services/movie/movie.service';
import Cast from 'src/app/model/cast/cast';
import { Location } from '@angular/common';
import { combineLatest, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  /**
   * @internal
   */
  public data$: Observable<[Movie, Cast[]]>;

  constructor(private route: ActivatedRoute, private movieService: MovieService, private location: Location) {
  }

  ngOnInit(): void {
    this.data$ = this.route.params.pipe(
      switchMap(
        params => combineLatest([
          this.movieService.getMovie(params.id),
          this.movieService.getCast(params.id),
        ])
      )
    );
  }

  getBack() {
    this.location.back();
  }
}
