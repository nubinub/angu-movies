import { Component, Input, ViewChild } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import TvShow from 'src/app/model/tv-show/tv-show';

@Component({
  selector: 'tv-show-card',
  templateUrl: './tv-show-card.component.html',
  styleUrls: ['./tv-show-card.component.scss']
})
export class TvShowCardComponent {

  @Input()tvShow: TvShow;

  @ViewChild(MatTooltip) tooltip: MatTooltip;

  constructor(private router: Router) { }

  goToTvShow() {
    this.tooltip.ngOnDestroy();
    this.router.navigate(['tv', this.tvShow.id]);
  }
}
