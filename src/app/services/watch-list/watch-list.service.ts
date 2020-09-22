import { Injectable } from '@angular/core';
import { AbstractListService } from '../list/abstract-list.service';

@Injectable({
  providedIn: 'root'
})
export class WatchListService extends AbstractListService {
  constructor() {
    super('watch-list');
  }
}