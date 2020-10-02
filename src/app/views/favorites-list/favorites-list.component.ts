import { Component, Inject, OnInit } from '@angular/core';
import { Media } from 'src/app/model/media/media';
import { ListService, SEEN_LIST_SERVICE, WATCH_LIST_SERVICE } from 'src/app/services/list/list.service';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.scss']
})
export class FavoritesListComponent implements OnInit {
  public medias: Media[];

  constructor(@Inject(SEEN_LIST_SERVICE) private watchListService: ListService) {
  }

  ngOnInit() {
    this.medias = this.watchListService.getList();
  }

}
