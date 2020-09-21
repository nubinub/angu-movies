import { Component, OnInit } from '@angular/core';
import { WatchListService } from 'src/app/services/watch-list/watch-list.service';
import Movie from 'src/app/model/movie/movie';

@Component({
  selector: 'app-watch-movies',
  templateUrl: './watch-movies.component.html',
  styleUrls: ['./watch-movies.component.scss']
})
export class WatchMoviesComponent implements OnInit {

  constructor(private watchListService: WatchListService) { }

  ngOnInit(): void {
  }

  getMovies(): Movie[] {
    return this.watchListService.getList();
  }

}
