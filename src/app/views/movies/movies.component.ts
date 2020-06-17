import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import Movie from 'src/app/model/movie';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  public movies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getDefaultMovies().subscribe({
      next: (movies) => {
        this.movies = movies;
      }
    })
  }
}
