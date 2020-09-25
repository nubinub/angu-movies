import { TestBed } from '@angular/core/testing';
import EType from 'src/app/model/type/type-enum';
import movies from 'src/testing/mock/movies-mock';
import { tvShows } from 'src/testing/mock/tv-shows-mock';
import { MovieService } from '../movie/movie.service';
import { TvShowService } from '../tv-show/tv-show.service';

import { MediaService } from './media.service';

describe('Service: MediaService', () => {
  let service: MediaService;
  let movieServiceSpy;
  let tvShowServiceSpy;

  beforeEach(() => {
    movieServiceSpy = jasmine.createSpyObj('MovieService', ['searchMovies']);
    tvShowServiceSpy = jasmine.createSpyObj('TvShowService', ['searchTvShows']);
    TestBed.configureTestingModule({
      providers: [
        {provide: MovieService, useValue: movieServiceSpy},
        {provide: TvShowService, useValue: tvShowServiceSpy},
      ]
    });
    service = TestBed.inject(MediaService);
  });

  describe('#search', () => {
    it('should call the searchMovies from MovieService when given a search params of type Movie', () => {
      service.search({type: EType.Movie});
      expect(movieServiceSpy.searchMovies).toHaveBeenCalled();
    });

    it('should call the searchTvShows from TvShowService when given a search params of type TvShow', () => {
      service.search({type: EType.TvShow});
      expect(tvShowServiceSpy.searchTvShows).toHaveBeenCalled();
    });
  });

  describe('#getTitle', () => {
    it('should return the movie original_title when given a movie', () => {
      expect(service.getTitle(movies[0])).toEqual(movies[0].original_title);
    });

    it('should return the tv show original_name when given a tv show', () => {
      expect(service.getTitle(tvShows[0])).toEqual(tvShows[0].original_name);
    });
  });
});
