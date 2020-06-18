import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import Movie from 'src/app/model/movie';

@Component({
  selector: 'app-movies',
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
    });
  }

  onSearch(value: string): void {
    if (value) {
      this.movieService.searchMovies(value).subscribe({
        next: (movies) => {
          this.movies = movies;
        }
      });
    }
  }
}
