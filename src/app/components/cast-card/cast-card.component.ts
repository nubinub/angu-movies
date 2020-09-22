import { Component, OnInit, Input, OnChanges } from '@angular/core';
import Cast from 'src/app/model/cast/cast';
import { PosterService } from 'src/app/services/poster/poster.service';

@Component({
  selector: 'cast-card',
  templateUrl: './cast-card.component.html',
  styleUrls: ['./cast-card.component.scss']
})
export class CastCardComponent implements OnInit, OnChanges {

  @Input() cast: Cast;

  profileUrl: string;

  constructor(private posterService: PosterService) { }

  ngOnInit(): void {
    this.updateProfileUrl();
  }

  ngOnChanges(): void {
    this.updateProfileUrl();
  }

  private updateProfileUrl() {
    this.profileUrl = this.posterService.getCastPosterUrl(this.cast);
  }
}
