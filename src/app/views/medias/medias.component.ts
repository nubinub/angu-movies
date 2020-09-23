import { Component, OnInit } from '@angular/core';
import { Media } from 'src/app/model/media/media';
import SearchParams from 'src/app/model/search-params/search-params';
import EType from 'src/app/model/type/type-enum';
import { MediaService } from 'src/app/services/media/media.service';

@Component({
  selector: 'app-medias',
  templateUrl: './medias.component.html',
  styleUrls: ['./medias.component.scss']
})
export class MediasComponent implements OnInit {
  public items: Media[] = [];

  constructor(private mediaService: MediaService) { }

  ngOnInit(): void {
    this.mediaService.search({type: EType.Movie}).subscribe((medias) => this.items = medias);
  }

  onSearch(searchParams: SearchParams): void {
   this.mediaService.search(searchParams).subscribe((medias) => this.items = medias);
  }
}
