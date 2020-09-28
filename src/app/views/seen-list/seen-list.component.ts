import { Component, Inject, OnInit } from '@angular/core';
import { Media } from 'src/app/model/media/media';
import { ListService, SEEN_LIST_SERVICE } from 'src/app/services/list/list.service';

@Component({
  selector: 'app-seen-list',
  templateUrl: './seen-list.component.html',
  styleUrls: ['./seen-list.component.scss']
})
export class SeenListComponent implements OnInit {
  medias: Media[];

  constructor(@Inject(SEEN_LIST_SERVICE) private seenListService: ListService) { }

  ngOnInit(): void {
    this.medias = this.seenListService.getList();
  }
}
