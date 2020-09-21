import { Component, OnInit, Input } from '@angular/core';
import Cast from 'src/app/model/cast/cast';

@Component({
  selector: 'cast-card',
  templateUrl: './cast-card.component.html',
  styleUrls: ['./cast-card.component.scss']
})
export class CastCardComponent implements OnInit {

  @Input() cast: Cast;

  constructor() { }

  ngOnInit(): void {
  }

  getProfileUrl() {
    return this.cast ? `https://image.tmdb.org/t/p/w138_and_h175_face${this.cast.profile_path}` : ``;
  }
}
