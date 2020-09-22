import { Component, Inject, OnInit } from '@angular/core';
import Movie from 'src/app/model/movie/movie';
import { ListService, WATCH_LIST_SERVICE } from 'src/app/services/list/list.service';

@Component({
  selector: 'app-watch-movies',
  templateUrl: './watch-movies.component.html',
  styleUrls: ['./watch-movies.component.scss']
})
export class WatchMoviesComponent implements OnInit {

  movies: Movie[];

  constructor(@Inject(WATCH_LIST_SERVICE) private watchListService: ListService) { }

  ngOnInit(): void {
    this.movies = this.watchListService.getList();
  }
}
