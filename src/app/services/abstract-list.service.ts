import Movie from '../model/movie';

export abstract class AbstractListService {

  private list: Movie[];

  constructor() {
    this.list = JSON.parse(localStorage.getItem(this.getLocalStorageKey())) || [];
  }

  /** Returns the localStorage key used to store the list */
  abstract getLocalStorageKey(): string;

  /**
  * Persist the list in the localStorage.
  */
  private _persist(): void {
    localStorage.setItem(this.getLocalStorageKey(), JSON.stringify(this.list));
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
    this.list = this.list.filter(m => m.id !== movie.id);
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
    return !!this.list.find(m => m.id === movie.id);
  }

  /**
   * Returns the list
   */
  getList(): Movie[] {
    return this.list;
  }
}
