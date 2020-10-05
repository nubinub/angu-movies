import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Cast from 'src/app/model/cast/cast';
import { Media } from 'src/app/model/media/media';
import { MediaService } from 'src/app/services/media/media.service';

@Component({
  selector: 'media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.scss']
})
export class MediaDetailsComponent implements OnInit {
  @Input() public media: Media;

  @Input() public title: string;

  public mediaDetails$: Observable<{media: Media, casts: Cast[]}>;

  constructor(private mediaService: MediaService) {
  }

  ngOnInit() {
    this.mediaDetails$ = this.mediaService.getMediaDetails(this.media).pipe(
      map(
        ([media, casts]) => ({media, casts})
      )
    );
  }
}
