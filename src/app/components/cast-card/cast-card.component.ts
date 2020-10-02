import { Component, Input } from '@angular/core';
import Cast from 'src/app/model/cast/cast';

@Component({
  selector: 'cast-card',
  templateUrl: './cast-card.component.html',
  styleUrls: ['./cast-card.component.scss']
})
export class CastCardComponent {

  @Input() cast: Cast;
}
