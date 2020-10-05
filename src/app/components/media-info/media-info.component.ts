import { Component, Input } from '@angular/core';
import { Media } from 'src/app/model/media/media';
import EType from 'src/app/model/type/type-enum';

@Component({
  selector: 'media-info',
  templateUrl: './media-info.component.html',
  styleUrls: ['./media-info.component.scss']
})
export class MediaInfoComponent {
  @Input() public media: Media;

  public etype = EType;
}
