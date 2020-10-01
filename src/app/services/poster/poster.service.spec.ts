import { TestBed } from '@angular/core/testing';
import { casts } from 'src/testing/data/casts.mock';
import movies from 'src/testing/data/movies-mock';
import { MOVIE_API_BASE_URL } from '../movie-repository/movie-repository.service';

import { IMAGE_BASE_URL, PosterService } from './poster.service';

describe('Service: PosterService', () => {
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

  describe('#getMediaPosterUrl', () => {
    it('should contain the media poster path', () => {
      expect(service.getMediaPosterUrl(movies[0])).toContain(movies[0].poster_path);
    });

    it('should starts with the image base url', () => {
      expect(service.getMediaPosterUrl(movies[0]).startsWith('image-api')).toBeTrue();
    });
  });

  describe('#getCastPosterUrl', () => {
    it('should contain the cast profile path', () => {
      expect(service.getCastPosterUrl(casts[0])).toContain(casts[0].profile_path);
    });

    it('should starts with the image base url', () => {
      expect(service.getCastPosterUrl(casts[0]).startsWith('image-api')).toBeTrue();
    });
  });
});
