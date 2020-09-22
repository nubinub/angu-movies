import { Inject, Injectable, InjectionToken } from '@angular/core';
import Cast from 'src/app/model/cast/cast';
import Movie from 'src/app/model/movie/movie';

export const IMAGE_BASE_URL = new InjectionToken<string>('Image base url');

@Injectable({
  providedIn: 'root'
})
export class PosterService {
  constructor(@Inject(IMAGE_BASE_URL) private imageBaseUrl: string) { }

  /**
   * Get the movie poster url
   * @param movie The movie
   */
  getMoviePosterUrl(movie: Movie) {
    return movie ? `${this.imageBaseUrl}t/p/w500${movie.poster_path}` : '';
  }

  /**
   * Get the cast poster url
   * @param cast The cast
   */
  getCastPosterUrl(cast: Cast) {
    return cast ? `${this.imageBaseUrl}t/p/w138_and_h175_face${cast.profile_path}` : '';
  }
}
