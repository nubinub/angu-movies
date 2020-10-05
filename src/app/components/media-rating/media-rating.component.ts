import { Component, Input, OnInit } from '@angular/core';
import { Media } from 'src/app/model/media/media';

@Component({
  selector: 'media-rating',
  templateUrl: './media-rating.component.html',
  styleUrls: ['./media-rating.component.scss']
})
export class MediaRatingComponent {
  @Input() public media: Media;
}
