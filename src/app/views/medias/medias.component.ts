import { Component } from '@angular/core';
import { Media } from 'src/app/model/media/media';
import SearchParams from 'src/app/model/search-params/search-params';
import { MediaService } from 'src/app/services/media/media.service';

@Component({
  selector: 'app-medias',
  templateUrl: './medias.component.html',
  styleUrls: ['./medias.component.scss']
})
export class MediasComponent {
  public items: Media[] = [];

  constructor(private mediaService: MediaService) { }

  onSearch(searchParams: SearchParams): void {
   this.mediaService.search(searchParams).subscribe((medias) => this.items = medias);
  }
}
