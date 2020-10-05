import { Component, Input, OnInit } from '@angular/core';
import { Media } from 'src/app/model/media/media';

@Component({
  selector: 'popular-medias',
  templateUrl: './popular-medias.component.html',
  styleUrls: ['./popular-medias.component.scss']
})
export class PopularMediasComponent {
  @Input() medias: Media[];

  @Input() title: string;
}
