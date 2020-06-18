import { Component, OnInit, Input } from '@angular/core';
import { WatchListService } from 'src/app/services/watch-list.service';
import Movie from 'src/app/model/movie';

@Component({
  selector: 'watch-list-toggle',
  templateUrl: './watch-list-toggle.component.html',
  styleUrls: ['./watch-list-toggle.component.scss']
})
export class WatchListToggleComponent implements OnInit {

  @Input() movie: Movie;

  constructor(private watchListService: WatchListService) { }

  ngOnInit(): void {
  }

  toggleMovie(): void {
    this.watchListService.toggleMovie(this.movie);
  }

  /**
   * Returns true if the movie is in the seen list, false if not.
   */
  hasMovie(): boolean {
    return this.watchListService.hasMovie(this.movie);
  }

}
