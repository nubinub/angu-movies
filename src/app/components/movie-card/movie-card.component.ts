import { Component, OnInit, Input } from '@angular/core';
import Movie from 'src/app/model/movie';
import { SeenListService } from 'src/app/services/seen-list.service';
import { WatchListService } from 'src/app/services/watch-list.service';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie;

  constructor(private seenListService: SeenListService, private watchListService: WatchListService) {}

  ngOnInit(): void {
  }

  getMoviePoster(): string {
    return  this.movie ? `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}` : '';
  }

  toggleSeen(): void {
    this.seenListService.toggleMovie(this.movie);
  }

  /**
   * Returns true if the movie is in the seen list, false if not.
   */
  isSeen(): boolean {
    return this.seenListService.hasMovie(this.movie);
  }

  /**
   * Toggle the movie in the watch list, remove it if he is already in it, else add it.
   */
  toggleWatch(): void {
    this.watchListService.toggleMovie(this.movie);
  }

  /**
   * Returns true if the movie is in the watch list, false if not
   */
  isWatch(): boolean {
    return this.watchListService.hasMovie(this.movie);
  }
}
