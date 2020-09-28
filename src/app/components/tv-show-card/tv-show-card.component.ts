import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { Router } from '@angular/router';
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

  @ViewChild(MatTooltip) tooltip: MatTooltip;

  constructor(private posterService: PosterService, private router: Router) { }

  ngOnChanges(): void {
    this.tvShowPosterUrl = this.posterService.getMediaPosterUrl(this.tvShow);
  }

  goToTvShow() {
    this.tooltip.ngOnDestroy();
    this.router.navigate(['tv', this.tvShow.id]);
  }
}
