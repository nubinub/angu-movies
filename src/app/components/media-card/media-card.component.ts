import { Component, Input, OnInit } from '@angular/core';
import { Media } from 'src/app/model/media/media';

@Component({
  selector: 'media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss']
})
export class MediaCardComponent {

  @Input() media: Media;
}
