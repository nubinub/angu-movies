import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import PopularResponse from '../model/popular-response';
import { Observable } from 'rxjs';
import Movie from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieRepository {
  private apiKey: string;

  constructor(private httpClient: HttpClient, ) {
    this.apiKey = localStorage.getItem('api_key');
  }

  /**
   * Calls themoviedb api to access popular movies.
   */
  getPopular(): Observable<PopularResponse> {
    const params = new HttpParams()
      .set('language', 'en-US')
      .set('page', '1')
      .set('api_key', this.apiKey);
    return this.httpClient.get<PopularResponse>(`https://api.themoviedb.org/3/movie/popular`,
      {responseType: "json", params}
    );
  }

  /**
   * Get the movies details from the given id.
   *
   * @param id Movie id
   */
  getById(id: number): Observable<Movie> {
    const params = new HttpParams()
      .set('language', 'en-US')
      .set('api_key', this.apiKey);
    return this.httpClient.get<Movie>(`https://api.themoviedb.org/3/movie/${id}`,
      {responseType: "json", params}
    );
  }
}
