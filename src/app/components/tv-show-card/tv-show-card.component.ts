import { Component, Input, OnChanges } from '@angular/core';
import TvShow from 'src/app/model/tv-show/tv-show';
import { PosterService } from 'src/app/services/poster/poster.service';

@Component({
  selector: 'tv-show-card',
  templateUrl: './tv-show-card.component.html',
  styleUrls: ['./tv-show-card.component.scss']
})
export class TvShowCardComponent implements OnChanges {

  @Input()tvShow: TvShow;

  tvShowPosterUrl: string;

  constructor(private posterService: PosterService) { }

  ngOnChanges(): void {
    this.tvShowPosterUrl = this.posterService.getMediaPosterUrl(this.tvShow);
  }
}
