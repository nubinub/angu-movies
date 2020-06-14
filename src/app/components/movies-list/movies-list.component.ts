import { Component, OnInit } from '@angular/core';
import movies from 'src/app/mock/movies-mock';
import Movie from 'src/app/model/movie';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  public movies: Movie[] = movies;

  constructor() { }

  ngOnInit(): void {
  }

}
