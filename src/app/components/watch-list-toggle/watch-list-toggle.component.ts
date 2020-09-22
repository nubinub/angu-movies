import { Component, OnInit, Input, Inject, OnChanges } from '@angular/core';
import Movie from 'src/app/model/movie/movie';
import { ListService, WATCH_LIST_SERVICE } from 'src/app/services/list/list.service';

@Component({
  selector: 'watch-list-toggle',
  templateUrl: './watch-list-toggle.component.html',
  styleUrls: ['./watch-list-toggle.component.scss']
})
export class WatchListToggleComponent implements OnInit, OnChanges {

  @Input() movie: Movie;

  toBeWatched: boolean;

  constructor(@Inject(WATCH_LIST_SERVICE) private watchListService: ListService) { }

  ngOnInit(): void {
    this.toBeWatched = this.watchListService.hasMovie(this.movie);
  }

  ngOnChanges(): void {
    this.toBeWatched = this.watchListService.hasMovie(this.movie);
  }

  /**
   * Add the movie to the watch list if it not already in it, else removes it
   */
  toggleMovie(): void {
    this.watchListService.toggleMovie(this.movie);
    this.toBeWatched = this.watchListService.hasMovie(this.movie);
  }
}
