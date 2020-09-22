import { Component, OnInit, Input } from '@angular/core';
import { SeenListService } from 'src/app/services/seen-list/seen-list.service';
import Movie from 'src/app/model/movie/movie';

@Component({
  selector: 'seen-list-toggle',
  templateUrl: './seen-list-toggle.component.html',
  styleUrls: ['./seen-list-toggle.component.scss']
})
export class SeenListToggleComponent implements OnInit {

  @Input() movie: Movie;

  hasBeenSeen: boolean;

  constructor(private seenListService: SeenListService) { }

  ngOnInit(): void {
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
