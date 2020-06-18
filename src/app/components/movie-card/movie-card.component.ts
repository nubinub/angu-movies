import { Component, OnInit, Input } from '@angular/core';
import Movie from 'src/app/model/movie';
import { SeenListService } from 'src/app/services/seen-list.service';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie;

  constructor(private seenListService: SeenListService) {}

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
}
