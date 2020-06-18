import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Movie from 'src/app/model/movie';
import { MovieService } from 'src/app/services/movie.service';
import Cast from 'src/app/model/cast';
import { Location } from '@angular/common';

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
    this.route.params.subscribe(params => {
      this.movieService.getMovie(params['id']).subscribe(
        {
          next: (movie) => {
            this.movie = movie;
          }
        }
      );

      this.movieService.getCast(params['id']).subscribe(
        {
          next: (cast) => {
            this.casts = cast.slice(0, 5);
          }
        }
      );
    });
  }

  getBack() {
    this.location.back();
  }
}
