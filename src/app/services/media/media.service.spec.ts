import { TestBed } from '@angular/core/testing';
import { MovieService } from '../movie/movie.service';
import { TvShowService } from '../tv-show/tv-show.service';

import { MediaService } from './media.service';

describe('MediaService', () => {
  let service: MediaService;

  beforeEach(() => {
    const movieServiceSpy = jasmine.createSpyObj('MovieService', ['searchMovies']);
    const tvShowServiceSpy = jasmine.createSpyObj('TvShowService', ['searchTvShows']);
    TestBed.configureTestingModule({
      providers: [
        {provide: MovieService, useValue: movieServiceSpy},
        {provide: TvShowService, useValue: tvShowServiceSpy},
      ]
    });
    service = TestBed.inject(MediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
