import { Component, Inject } from '@angular/core';
import { Media } from 'src/app/model/media/media';
import { ListService, SEEN_LIST_SERVICE } from 'src/app/services/list/list.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  public favList: Media[];

  constructor(@Inject(SEEN_LIST_SERVICE) private seenListService: ListService) {
    this.favList = this.seenListService.getList();
  }
}
