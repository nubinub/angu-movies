import Movie from '../model/movie';

export abstract class AbstractListService {

  private _list: Movie[];

  private _key: string

  constructor(key: string) {
    this._key = key;
    this._list = JSON.parse(localStorage.getItem(this._key)) || [];
  }

  /**
   * Persist the list in the local storage.
   */
  private _persist(): void {
    localStorage.setItem(this._key, JSON.stringify(this._list));
  }

  /**
   * Add the given movie to the list and persist the list.
   *
   * @param movie Movie to be added
   */
  private _addMovie(movie: Movie): void {
    this._list.push(movie);
    this._persist();
  }

  /**
   * Remove the given movie from the list, and persist the list.
   *
   * @param movie Movie to be removed
   */
  private _removeMovie(movie: Movie): void {
    this._list = this._list.filter(m => m.id !== movie.id);
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
   * @param movie
   */
  hasMovie(movie: Movie): boolean {
    return !!this._list.find(m => m.id === movie.id);
  }

  /**
   * Returns the list
   */
  getList(): Movie[] {
    return this._list;
  }
}
