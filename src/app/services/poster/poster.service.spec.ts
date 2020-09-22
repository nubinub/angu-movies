import { TestBed } from '@angular/core/testing';
import { MOVIE_API_BASE_URL } from '../movie-repository/movie-repository.service';

import { IMAGE_BASE_URL, PosterService } from './poster.service';

describe('PosterService', () => {
  let service: PosterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: MOVIE_API_BASE_URL, useValue: 'movie-api' },
        { provide: IMAGE_BASE_URL, useValue: 'image-api' },
      ]
    });
    service = TestBed.inject(PosterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
