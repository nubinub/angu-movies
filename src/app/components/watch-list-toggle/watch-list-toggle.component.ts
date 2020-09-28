import { Component, Input, Inject, OnChanges } from '@angular/core';
import { Media } from 'src/app/model/media/media';
import Movie from 'src/app/model/movie/movie';
import { ListService, WATCH_LIST_SERVICE } from 'src/app/services/list/list.service';

@Component({
  selector: 'watch-list-toggle',
  templateUrl: './watch-list-toggle.component.html',
  styleUrls: ['./watch-list-toggle.component.scss']
})
export class WatchListToggleComponent implements OnChanges {

  @Input() media: Media;

  toBeWatched: boolean;

  constructor(@Inject(WATCH_LIST_SERVICE) private watchListService: ListService) { }

  ngOnChanges(): void {
    this.toBeWatched = this.watchListService.hasMedia(this.media);
  }

  /**
   * Add the movie to the watch list if it not already in it, else removes it
   */
  toggleMovie(): void {
    this.toBeWatched = this.watchListService.toggleMedia(this.media);
  }
}
