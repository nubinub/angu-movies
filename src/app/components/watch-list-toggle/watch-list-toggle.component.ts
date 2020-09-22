import { Component, OnInit, Input } from '@angular/core';
import { WatchListService } from 'src/app/services/watch-list/watch-list.service';
import Movie from 'src/app/model/movie/movie';

@Component({
  selector: 'watch-list-toggle',
  templateUrl: './watch-list-toggle.component.html',
  styleUrls: ['./watch-list-toggle.component.scss']
})
export class WatchListToggleComponent implements OnInit {

  @Input() movie: Movie;

  toBeWatched: boolean;

  constructor(private watchListService: WatchListService) { }

  ngOnInit(): void {
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
