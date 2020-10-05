import { Component, Input, OnChanges } from '@angular/core';
import { Media } from 'src/app/model/media/media';

@Component({
  selector: 'media-poster',
  templateUrl: './media-poster.component.html',
  styleUrls: ['./media-poster.component.scss']
})
export class MediaPosterComponent {

  @Input() media: Media;
}
