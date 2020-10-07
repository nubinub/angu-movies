import { Component, Input, Inject, OnChanges } from '@angular/core';
import { Media } from 'src/app/model/media/media';
import { ListService, SEEN_LIST_SERVICE } from 'src/app/services/list/list.service';

@Component({
  selector: 'seen-list-toggle',
  templateUrl: './seen-list-toggle.component.html',
  styleUrls: ['./seen-list-toggle.component.scss']
})
export class SeenListToggleComponent implements OnChanges {

  @Input() public media: Media;

  @Input() public withText: boolean;

  public hasBeenSeen: boolean;

  constructor(@Inject(SEEN_LIST_SERVICE) private seenListService: ListService) { }

  public ngOnChanges() {
    this.hasBeenSeen = this.seenListService.hasMedia(this.media);
  }

  /**
   * Add the media to the seen list if the media is not already in it, else removes it
   */
  public toggleMedia(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    this.hasBeenSeen = this.seenListService.toggleMedia(this.media);
  }
}
