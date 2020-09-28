import { Component, Input, OnInit } from '@angular/core';
import TvShow from 'src/app/model/tv-show/tv-show';

@Component({
  selector: 'tv-show-info',
  templateUrl: './tv-show-info.component.html',
  styleUrls: ['./tv-show-info.component.scss']
})
export class TvShowInfoComponent {
  @Input() tvShow: TvShow;
}
