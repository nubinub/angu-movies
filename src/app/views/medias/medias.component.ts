import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie/movie.service';
import { TvShowService } from 'src/app/services/tv-show/tv-show.service';
import { Media } from 'src/app/model/media/media';
import SearchParams from 'src/app/model/search-params/search-params';

@Component({
  selector: 'app-medias',
  templateUrl: './medias.component.html',
  styleUrls: ['./medias.component.scss']
})
export class MediasComponent implements OnInit {
  public items: Media[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getDefaultMovies().subscribe({
      next: (movies) => {
        this.items = movies;
      }
    });
  }

  onSearch(searchParams: SearchParams): void {
    if (searchParams.query) {
      this.movieService.searchMovies(searchParams.query).subscribe({
        next: (movies) => {
          this.items = movies;
        }
      });
    } else {
      this.movieService.getDefaultMovies().subscribe({
        next: (movies) => {
          this.items = movies;
        }
      });
    }
  }
}
