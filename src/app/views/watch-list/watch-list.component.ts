import { Component, Inject, OnInit } from '@angular/core';
import { Media } from 'src/app/model/media/media';
import { ListService, WATCH_LIST_SERVICE } from 'src/app/services/list/list.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.scss']
})
export class WatchListComponent implements OnInit {
  public medias: Media[];

  constructor(@Inject(WATCH_LIST_SERVICE) private watchListService: ListService) {
  }

  ngOnInit() {
    this.medias = this.watchListService.getList();
  }
}
