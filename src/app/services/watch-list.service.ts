import { Injectable } from '@angular/core';
import { AbstractListService } from './abstract-list.service';

@Injectable({
  providedIn: 'root'
})
export class WatchListService extends AbstractListService {
  constructor() {
    super();
  }

  getLocalStorageKey(): string {
    return 'watch-list';
  }
}
