import { Injectable } from '@angular/core';
import { AbstractListService } from './abstract-list.service';

@Injectable({
  providedIn: 'root'
})
export class SeenListService extends AbstractListService {
  constructor() {
    super();
  }

  getLocalStorageKey(): string {
    return 'seen-movies';
  }
}