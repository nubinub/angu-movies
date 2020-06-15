import { Injectable } from '@angular/core';
import { MovieRepository } from '../repositories/movie-repository.service';
import Movie from '../model/movie';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private repository: MovieRepository) { }

  /**
   * Returns a default list of movies.
   */
  getDefaultMovies(): Observable<Movie[]> {
    return this.repository.getPopular().pipe(
      map(
        response => response.results
      )
    );
  }

  /**
   * Returns the movie matching the given id
   * @param id Movie id
   */
  getMovie(id: number): Observable<Movie> {
    return this.repository.getById(id);
  }
}
