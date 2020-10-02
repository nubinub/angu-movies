import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { flatMap, map, mergeAll, switchMap, tap } from 'rxjs/operators';
import Cast from 'src/app/model/cast/cast';
import { Media } from 'src/app/model/media/media';
import Movie from 'src/app/model/movie/movie';
import TvShow from 'src/app/model/tv-show/tv-show';
import { MediaPosterPipe } from 'src/app/pipes/media-poster/media-poster.pipe';
import { MovieService } from 'src/app/services/movie/movie.service';
import { TvShowService } from 'src/app/services/tv-show/tv-show.service';

@Component({
  selector: 'app-medias',
  templateUrl: './medias.component.html',
  styleUrls: ['./medias.component.scss']
})
export class MediasComponent implements OnInit {
  public moviesData$: Observable<{movies: Movie[], movie: Movie, casts: Cast[]}>;

  public popularTvShows$: Observable<TvShow[]>;

  constructor(private movieService: MovieService, private tvShowService: TvShowService) { }

  ngOnInit() {
    this.moviesData$ = this.movieService.getDefaultMovies().pipe(
      flatMap((movies) => combineLatest([
        this.movieService.getMovie(movies[0].id),
        this.movieService.getCast(movies[0].id)
      ]).pipe(
        map(
          ([movie, casts]) => ({movies, movie, casts})
        ),
      ))
    );
    this.popularTvShows$ = this.tvShowService.getDefaultTvShows();
  }
}
