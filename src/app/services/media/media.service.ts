import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { debounceTime, map, startWith, tap } from 'rxjs/operators';
import Cast from 'src/app/model/cast/cast';
import { Media } from 'src/app/model/media/media';
import { SearchParams } from 'src/app/model/search-params/search-params';
import EType from 'src/app/model/type/type-enum';
import { MovieService } from '../movie/movie.service';
import { TvShowService } from '../tv-show/tv-show.service';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  constructor(private movieService: MovieService, private tvShowService: TvShowService) { }

  search(searchParams: SearchParams): Observable<Media[]> {
    if (searchParams.type === EType.Movie) {
      return this.movieService.searchMovies(searchParams);
    } else if (searchParams.type === EType.TvShow) {
      return this.tvShowService.searchTvShows(searchParams);
    }
  }

  /**
   * Get the title from the given media according to its type
   * @param media Media
   */
  getTitle(media: Media) {
    if (media.type === EType.Movie) {
      return media.original_title;
    } else if (media.type === EType.TvShow) {
      return media.original_name;
    }
  }

  /**
   * Returns an observable which emit SearchParams when form has changed
   * @param queryControl The query field FormControl
   * @param yearControl The year field FormControl
   * @param typeControl The type field FormControl
   * @returns Observable which emit SearchParams
   */
  getSearchFormObservable(queryControl: FormControl, yearControl: FormControl, typeControl: FormControl): Observable<SearchParams> {
    return combineLatest(
      [
        queryControl.valueChanges.pipe(
          tap(query => query ? yearControl.enable({ emitEvent: false }) : yearControl.disable({ emitEvent: false })),
          debounceTime(500),
          startWith(''),
        ),
        typeControl.valueChanges.pipe(
          startWith(EType.Movie)
        ),
        yearControl.valueChanges.pipe(
          debounceTime(500),
          map(year => parseInt(year, 10)),
          startWith(NaN),
        ),
      ]
    ).pipe(
      map(
        ([query, type, year]) => ({ query, type, year })
      )
    );
  }

  getMediaDetails(media: Media): Observable<[Media, Cast[]]> {
    if (media.type === EType.Movie) {
      return combineLatest(
        [
          this.movieService.getMovie(media.id),
          this.movieService.getCast(media.id)
        ]
      );
    } else if (media.type === EType.TvShow) {
      return combineLatest(
        [
          this.tvShowService.getTvShow(media.id),
          this.tvShowService.getCast(media.id)
        ]
      );
    }
  }
}
