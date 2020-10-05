import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Movie from 'src/app/model/movie/movie';
import TvShow from 'src/app/model/tv-show/tv-show';
import { MovieService } from 'src/app/services/movie/movie.service';
import { TvShowService } from 'src/app/services/tv-show/tv-show.service';

@Component({
  selector: 'app-medias',
  templateUrl: './medias.component.html',
  styleUrls: ['./medias.component.scss']
})
export class MediasComponent implements OnInit {
  public popularMovies$: Observable<Movie[]>;

  public popularTvShows$: Observable<TvShow[]>;

  constructor(private movieService: MovieService, private tvShowService: TvShowService) { }

  ngOnInit() {
    this.popularMovies$ = this.movieService.getDefaultMovies();
    this.popularTvShows$ = this.tvShowService.getDefaultTvShows();
  }
}
