import { Component, OnInit, Input } from '@angular/core';
import Movie from 'src/app/model/movie/movie';

@Component({
  selector: 'movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {

  @Input() movie: Movie;

  constructor() { }

  ngOnInit(): void {
  }

}
