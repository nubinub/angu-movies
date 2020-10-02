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

  @Input() withText: boolean;

  toBeWatched: boolean;

  constructor(@Inject(WATCH_LIST_SERVICE) private watchListService: ListService) { }

  ngOnChanges(): void {
    this.toBeWatched = this.watchListService.hasMedia(this.media);
  }

  /**
   * Add the media to the watch list if it not already in it, else removes it
   */
  toggleMedia(): void {
    this.toBeWatched = this.watchListService.toggleMedia(this.media);
  }
}
