import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import TvShow from 'src/app/model/tv-show/tv-show';
import EType from 'src/app/model/type/type-enum';
import { TvShowRepository } from '../tv-show-repository/tv-show-repository.service';

const mapTvShow = (tvShow): TvShow => ({...tvShow, type: EType.TvShow});

@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  constructor(private tvShowRepository: TvShowRepository) { }

  searchTvShows(value: string): Observable<TvShow[]> {
    if (value) {
      return this.tvShowRepository.search(value).pipe(
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
}
