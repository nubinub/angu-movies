import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import PopularTvShowsResponse from 'src/app/model/popular-tv-shows-response/popular-tv-shows-response';
import SearchTvResponse from 'src/app/model/search-tv-response/search-tv-response';
import { ApiKeyService } from '../api-key/api-key.service';
import { MOVIE_API_BASE_URL } from '../movie-repository/movie-repository.service';

@Injectable({
  providedIn: 'root'
})
export class TvShowRepository {

  constructor(
    @Inject(MOVIE_API_BASE_URL)private movieApiBaseUrl: string,
    private apiKeyService: ApiKeyService,
    private httpClient: HttpClient,
  ) {}

  /**
   * Returns the list of the tv shows matching the given value.
   * @param value Search value
   */
  search(value: string): Observable<SearchTvResponse> {
    const params = new HttpParams()
      .set('api_key', this.apiKeyService.getKeyOrNavigate())
      .set('language', 'en-US')
      .set('page', '1')
      .set('includ_adult', 'false')
      .set('query', value);

    return this.httpClient.get<SearchTvResponse>(`${this.movieApiBaseUrl}search/tv`,
      {responseType: 'json', params}
    );
  }

  /**
   * Calls themoviedb api to access popular tv-shows.
   */
  getPopular(): Observable<PopularTvShowsResponse> {
    const params = new HttpParams()
      .set('language', 'en-US')
      .set('page', '1')
      .set('api_key', this.apiKeyService.getKeyOrNavigate());
    return this.httpClient.get<PopularTvShowsResponse>(`${this.movieApiBaseUrl}tv/popular`,
      {responseType: 'json', params}
    );
  }
}
