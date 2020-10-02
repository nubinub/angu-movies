import { Component, Input } from '@angular/core';
import Cast from 'src/app/model/cast/cast';
import { Media } from 'src/app/model/media/media';

@Component({
  selector: 'media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.scss']
})
export class MediaDetailsComponent {
  @Input() public media: Media;

  @Input() public casts: Cast[];

  @Input() public title: string;
}
