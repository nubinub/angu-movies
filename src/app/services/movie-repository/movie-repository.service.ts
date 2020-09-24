import { Inject, Injectable, InjectionToken } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import Movie from '../../model/movie/movie';
import CreditsResponse from '../../model/credits-response/credits-response';
import { ApiKeyService } from '../api-key/api-key.service';
import SearchMovieResponse from 'src/app/model/search-movie-response/search-movie-response';
import PopularMoviesResponse from 'src/app/model/popular-movies-response/popular-movies-response';
import { MoviesSearchParams } from 'src/app/model/search-params/search-params';

export const MOVIE_API_BASE_URL = new InjectionToken<string>('API base url');

@Injectable({
  providedIn: 'root'
})
export class MovieRepository {
  constructor(
    private httpClient: HttpClient,
    private apiKeyService: ApiKeyService,
    @Inject(MOVIE_API_BASE_URL) private movieApiBaseUrl: string
    ){
  }

  /**
   * Calls themoviedb api to access popular movies.
   */
  getPopular(): Observable<PopularMoviesResponse> {
    const params = new HttpParams()
      .set('language', 'en-US')
      .set('page', '1')
      .set('api_key', this.apiKeyService.getKeyOrNavigate());
    return this.httpClient.get<PopularMoviesResponse>(`${this.movieApiBaseUrl}movie/popular`,
      {responseType: 'json', params}
    );
  }

  /**
   * Get the movies details for the given id.
   *
   * @param id Movie id
   */
  getById(id: number): Observable<Movie> {
    const params = new HttpParams()
      .set('language', 'en-US')
      .set('api_key', this.apiKeyService.getKeyOrNavigate());
    return this.httpClient.get<Movie>(`${this.movieApiBaseUrl}movie/${id}`,
      {responseType: 'json', params}
    );
  }

  /**
   * Get the movies cast information for the given id.
   *
   * @param id Movie id
   */
  getMovieCredits(id: number): Observable<CreditsResponse> {
    const params = new HttpParams()
      .set('api_key', this.apiKeyService.getKeyOrNavigate());
    return this.httpClient.get<CreditsResponse>(`${this.movieApiBaseUrl}movie/${id}/credits`,
      {responseType: 'json', params}
    );
  }

  /**
   * Returns the list of the movies matching the given value.
   * @param searchParams Search parameters
   */
  search(searchParams: MoviesSearchParams): Observable<SearchMovieResponse> {
    let params = new HttpParams()
      .set('api_key', this.apiKeyService.getKeyOrNavigate())
      .set('language', 'en-US')
      .set('page', '1')
      .set('includ_adult', 'false')
      .set('query', searchParams.query);

    if (searchParams.primary_release_year) {
      params = params.set('primary_release_year', searchParams.primary_release_year.toString());
    }

    return this.httpClient.get<SearchMovieResponse>(`${this.movieApiBaseUrl}search/movie`,
      {responseType: 'json', params}
    );
  }
}
