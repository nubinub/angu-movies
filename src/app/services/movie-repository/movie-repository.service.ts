import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import PopularResponse from '../../model/popular-response/popular-response';
import { Observable } from 'rxjs';
import Movie from '../../model/movie/movie';
import CreditsResponse from '../../model/credits-response/credits-response';
import { ApiKeyService } from '../api-key/api-key.service';

@Injectable({
  providedIn: 'root'
})
export class MovieRepository {
  private baseUrl = 'https://api.themoviedb.org/3/';

  constructor(private httpClient: HttpClient, private apiKeyService: ApiKeyService) {
  }

  /**
   * Calls themoviedb api to access popular movies.
   */
  getPopular(): Observable<PopularResponse> {
    const params = new HttpParams()
      .set('language', 'en-US')
      .set('page', '1')
      .set('api_key', this.apiKeyService.getKeyOrNavigate());
    return this.httpClient.get<PopularResponse>(`${this.baseUrl}movie/popular`,
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
    return this.httpClient.get<Movie>(`${this.baseUrl}movie/${id}`,
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
    return this.httpClient.get<CreditsResponse>(`${this.baseUrl}movie/${id}/credits`,
      {responseType: 'json', params}
    );
  }

  /**
   * Returns the list of the movies matching the given value.
   * @param value Search value
   */
  search(value: string): Observable<PopularResponse> {
    const params = new HttpParams()
      .set('api_key', this.apiKeyService.getKeyOrNavigate())
      .set('language', 'en-US')
      .set('page', '1')
      .set('includ_adult', 'false')
      .set('query', value);

    return this.httpClient.get<PopularResponse>(`${this.baseUrl}search/movie`,
      {responseType: 'json', params}
    );
  }
}
