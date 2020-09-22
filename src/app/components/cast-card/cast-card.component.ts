import { Component, OnInit, Input, OnChanges } from '@angular/core';
import Cast from 'src/app/model/cast/cast';

@Component({
  selector: 'cast-card',
  templateUrl: './cast-card.component.html',
  styleUrls: ['./cast-card.component.scss']
})
export class CastCardComponent implements OnInit, OnChanges {

  @Input() cast: Cast;

  profileUrl: string;

  constructor() { }

  ngOnInit(): void {
    this.updateProfileUrl();
  }

  ngOnChanges(): void {
    this.updateProfileUrl();
  }

  private updateProfileUrl() {
    this.profileUrl = this.cast ? `https://image.tmdb.org/t/p/w138_and_h175_face${this.cast.profile_path}` : ``;
  }
}
