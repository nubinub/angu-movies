import { Component, Input, OnChanges } from '@angular/core';
import { Media } from 'src/app/model/media/media';
import { MediaService } from 'src/app/services/media/media.service';
import { PosterService } from 'src/app/services/poster/poster.service';

@Component({
  selector: 'media-poster',
  templateUrl: './media-poster.component.html',
  styleUrls: ['./media-poster.component.scss']
})
export class MediaPosterComponent implements OnChanges {

  @Input() media: Media;

  mediaPosterUrl: string;

  altMediaPoster: string;

  constructor(private posterService: PosterService, private mediaService: MediaService) {
  }

  ngOnChanges() {
    this.mediaPosterUrl = this.posterService.getMediaPosterUrl(this.media);
    this.altMediaPoster = this.mediaService.getTitle(this.media);
  }
}
