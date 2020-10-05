import { Component, OnInit, Input } from '@angular/core';
import { Media } from 'src/app/model/media/media';
import EType from 'src/app/model/type/type-enum';

@Component({
  selector: 'medias-list',
  templateUrl: './medias-list.component.html',
  styleUrls: ['./medias-list.component.scss']
})
export class MediasListComponent {
  @Input() items: Media[] = [];
}
