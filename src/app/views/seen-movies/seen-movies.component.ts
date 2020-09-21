import { Component, OnInit } from '@angular/core';
import { SeenListService } from 'src/app/services/seen-list/seen-list.service';
import Movie from 'src/app/model/movie';

@Component({
  selector: 'app-seen-movies',
  templateUrl: './seen-movies.component.html',
  styleUrls: ['./seen-movies.component.scss']
})
export class SeenMoviesComponent implements OnInit {
  constructor(private seenListService: SeenListService) { }

  ngOnInit(): void {
  }

  getMovies(): Movie[] {
    return this.seenListService.getList();
  }
}
