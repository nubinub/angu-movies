import { Component, OnInit, Input, Inject, OnChanges } from '@angular/core';
import Movie from 'src/app/model/movie/movie';
import { ListService, SEEN_MOVIES_SERVICE } from 'src/app/services/list/list.service';

@Component({
  selector: 'seen-list-toggle',
  templateUrl: './seen-list-toggle.component.html',
  styleUrls: ['./seen-list-toggle.component.scss']
})
export class SeenListToggleComponent implements OnInit, OnChanges {

  @Input() movie: Movie;

  hasBeenSeen: boolean;

  constructor(@Inject(SEEN_MOVIES_SERVICE) private seenListService: ListService) { }

  ngOnInit(): void {
    this.hasBeenSeen = this.seenListService.hasMovie(this.movie);
  }

  ngOnChanges() {
    this.hasBeenSeen = this.seenListService.hasMovie(this.movie);
  }

  /**
   * Add the movie to the seen list if the movie is not already in it, else removes it
   */
  toggleMovie(): void {
    this.seenListService.toggleMovie(this.movie);
    this.hasBeenSeen = this.seenListService.hasMovie(this.movie);
  }
}
