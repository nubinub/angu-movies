import { Injectable, InjectionToken } from '@angular/core';
import { Media } from 'src/app/model/media/media';

export const WATCH_LIST_SERVICE = new InjectionToken<ListService>('Watch list service', {
  providedIn: 'root',
  factory: () => new ListService('watch-list'),
});

export const SEEN_LIST_SERVICE = new InjectionToken<ListService>('Watch list service', {
  providedIn: 'root',
  factory: () => new ListService('seen-list')
});

@Injectable({
  providedIn: 'root',
  useFactory: (key) => new ListService(key),
})
export class ListService {

  private list: Media[];

  private key: string;

  constructor(key: string) {
    this.key = key;
    this.list = JSON.parse(localStorage.getItem(this.key)) || [];
  }

  /**
   * Persist the list in the local storage.
   */
  private _persist(): void {
    localStorage.setItem(this.key, JSON.stringify(this.list));
  }

  /**
   * Add the given media to the list and persist the list.
   *
   * @param media Movie to be added
   */
  private _addMedia(media: Media): void {
    this.list.push(media);
    this._persist();
  }

  /**
   * Remove the given media from the list, and persist the list.
   *
   * @param media Media to be removed
   */
  private _removeMedia(media: Media): void {
    const index = this.list.findIndex((m) => m.id === media.id && m.type === media.type);
    if (index !== -1) {
      this.list.splice(index, 1);
    }
    this._persist();
  }

  /**
   * Add the media to the list if not already in it, esle remove it from the list.
   * @param media Media to be toggled
   */
  toggleMedia(media: Media) {
    if (this.hasMedia(media)) {
      this._removeMedia(media);
    } else {
      this._addMedia(media);
    }
  }

  /**
   * Reutrn true if the given media is already in the list, false if not.
   *
   * @param media Media to check
   */
  hasMedia(media: Media): boolean {
    return !!media && !!this.list.find(m => m.id === media.id && m.type === media.type);
  }

  /**
   * Returns the list
   */
  getList(): Media[] {
    return this.list;
  }
}
