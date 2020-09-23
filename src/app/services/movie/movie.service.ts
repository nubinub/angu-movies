import { Injectable } from '@angular/core';
import { MovieRepository } from '../movie-repository/movie-repository.service';
import Movie from '../../model/movie/movie';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Cast from '../../model/cast/cast';
import EType from 'src/app/model/type/type-enum';

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
        response => response.results.map((m) => ({...m, type: EType.Movie}))
      )
    );
  }

  /**
   * Returns the movie matching the given id
   * @param id Movie id
   */
  getMovie(id: number): Observable<Movie> {
    return this.repository.getById(id).pipe(
      map(
        response => ({...response, type: EType.Movie})
      )
    );
  }

  /**
   * Returns the cast for the movie matching the given id
   * @param id Movie id
   */
  getCast(id: number): Observable<Cast[]> {
    return this.repository.getMovieCredits(id).pipe(
      map(
        response => response.cast
      )
    );
  }

  /**
   * Returns the movies matching the given search value
   * @param value Search value
   */
  searchMovies(value: string): Observable<Movie[]> {
    if (value) {
      return this.repository.search(value).pipe(
        map(
          response => response.results.map((m) => ({...m, type: EType.Movie}))
        )
      );
    } else {
      return this.getDefaultMovies();
    }
  }
}
