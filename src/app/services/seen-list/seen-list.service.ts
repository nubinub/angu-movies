import { Injectable } from '@angular/core';
import { AbstractListService } from '../list/abstract-list.service';

@Injectable({
  providedIn: 'root'
})
export class SeenListService extends AbstractListService {
  constructor() {
    super('seen-movies');
  }
}
