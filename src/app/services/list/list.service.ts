import { Injectable, InjectionToken } from '@angular/core';
import Movie from '../../model/movie/movie';

export const WATCH_LIST_SERVICE = new InjectionToken<ListService>('Watch list service', {
  providedIn: 'root',
  factory: () => new ListService('watch-list'),
});

export const SEEN_MOVIES_SERVICE = new InjectionToken<ListService>('Watch list service', {
  providedIn: 'root',
  factory: () => new ListService('seen-movies')
});

@Injectable({
  providedIn: 'root',
  useFactory: (key) => new ListService(key),
})
export class ListService {

  private list: Movie[];

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
   * Add the given movie to the list and persist the list.
   *
   * @param movie Movie to be added
   */
  private _addMovie(movie: Movie): void {
    this.list.push(movie);
    this._persist();
  }

  /**
   * Remove the given movie from the list, and persist the list.
   *
   * @param movie Movie to be removed
   */
  private _removeMovie(movie: Movie): void {
    const index = this.list.findIndex((m) => m.id === movie.id);
    if (index !== -1) {
      this.list.splice(index, 1);
    }
    this._persist();
  }

  /**
   * Add the movie to the list if not already in it, esle remove it from the list.
   * @param movie Movie to be toggle
   */
  toggleMovie(movie: Movie) {
    if (this.hasMovie(movie)) {
      this._removeMovie(movie);
    } else {
      this._addMovie(movie);
    }
  }

  /**
   * Reutrn true if the given movie is already in the list, false if not.
   *
   * @param movie Movie to check
   */
  hasMovie(movie: Movie): boolean {
    return !!movie && !!this.list.find(m => m.id === movie.id);
  }

  /**
   * Returns the list
   */
  getList(): Movie[] {
    return this.list;
  }
}
