import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
