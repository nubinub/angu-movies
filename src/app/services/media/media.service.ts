import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Media } from 'src/app/model/media/media';
import SearchParams from 'src/app/model/search-params/search-params';
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
      return this.movieService.searchMovies(searchParams.query);
    } else if (searchParams.type === EType.TvShow) {
      return this.tvShowService.searchTvShows(searchParams.query);
    }
  }
}
