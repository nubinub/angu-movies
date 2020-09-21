import { Component, OnInit, Input } from '@angular/core';
import { SeenListService } from 'src/app/services/seen-list/seen-list.service';
import Movie from 'src/app/model/movie';

@Component({
  selector: 'seen-list-toggle',
  templateUrl: './seen-list-toggle.component.html',
  styleUrls: ['./seen-list-toggle.component.scss']
})
export class SeenListToggleComponent implements OnInit {

  @Input() movie: Movie;

  constructor(private seenListService: SeenListService) { }

  ngOnInit(): void {
  }

  toggleMovie(): void {
    this.seenListService.toggleMovie(this.movie);
  }

  /**
   * Returns true if the movie is in the seen list, false if not.
   */
  hasMovie(): boolean {
    return this.seenListService.hasMovie(this.movie);
  }

}
