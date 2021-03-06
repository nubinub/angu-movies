import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Cast from 'src/app/model/cast/cast';
import { SearchParams } from 'src/app/model/search-params/search-params';
import TvShow from 'src/app/model/tv-show/tv-show';
import EType from 'src/app/model/type/type-enum';
import { TvShowRepository } from '../tv-show-repository/tv-show-repository.service';

const mapTvShow = (tvShow): TvShow => ({...tvShow, type: EType.TvShow});

@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  constructor(private tvShowRepository: TvShowRepository) { }

  searchTvShows(searchParams: SearchParams): Observable<TvShow[]> {
    if (searchParams && searchParams.query) {
      return this.tvShowRepository.search({
        query: searchParams.query,
        first_air_date_year: searchParams.year,
      }).pipe(
        map(
          response => response.results.map(mapTvShow)
        )
      );
    } else {
      return this.getDefaultTvShows();
    }
  }

  getDefaultTvShows(): Observable<TvShow[]> {
    return this.tvShowRepository.getPopular().pipe(
      map(
        response => response.results.map(mapTvShow)
      )
    );
  }

  /**
   * Returns the tv show matching the given id
   * @param id Tv show id
   */
  getTvShow(id: number): Observable<TvShow> {
    return this.tvShowRepository.getById(id).pipe(
      map(
        response => ({...response, type: EType.TvShow})
      )
    );
  }

  /**
   * Returns the cast for the tv show matching the given id
   * @param id Tv show id
   */
  getCast(id: number): Observable<Cast[]> {
    return this.tvShowRepository.getTvShowCredits(id).pipe(
      map(
        response => response.cast
      )
    );
  }
}
