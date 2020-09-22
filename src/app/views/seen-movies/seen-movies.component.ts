import { Component, Inject, OnInit } from '@angular/core';
import Movie from 'src/app/model/movie/movie';
import { ListService, SEEN_MOVIES_SERVICE } from 'src/app/services/list/list.service';

@Component({
  selector: 'app-seen-movies',
  templateUrl: './seen-movies.component.html',
  styleUrls: ['./seen-movies.component.scss']
})
export class SeenMoviesComponent implements OnInit {
  movies: Movie[];

  constructor(@Inject(SEEN_MOVIES_SERVICE) private seenListService: ListService) { }

  ngOnInit(): void {
    this.movies = this.seenListService.getList();
  }
}
