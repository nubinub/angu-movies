import { Component, OnInit, Input, Inject, OnChanges } from '@angular/core';
import { Media } from 'src/app/model/media/media';
import { ListService, SEEN_LIST_SERVICE } from 'src/app/services/list/list.service';

@Component({
  selector: 'seen-list-toggle',
  templateUrl: './seen-list-toggle.component.html',
  styleUrls: ['./seen-list-toggle.component.scss']
})
export class SeenListToggleComponent implements OnChanges {

  @Input() media: Media;

  hasBeenSeen: boolean;

  constructor(@Inject(SEEN_LIST_SERVICE) private seenListService: ListService) { }

  ngOnChanges() {
    this.hasBeenSeen = this.seenListService.hasMedia(this.media);
  }

  /**
   * Add the movie to the seen list if the movie is not already in it, else removes it
   */
  toggleMovie(): void {
    this.hasBeenSeen = this.seenListService.toggleMedia(this.media);
  }
}
