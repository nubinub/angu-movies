import { TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { TestScheduler } from 'rxjs/testing';
import EType from 'src/app/model/type/type-enum';
import { casts } from 'src/testing/data/casts.mock';
import movies from 'src/testing/data/movies-mock';
import { tvShows } from 'src/testing/data/tv-shows-mock';
import { MovieService } from '../movie/movie.service';
import { TvShowService } from '../tv-show/tv-show.service';

import { MediaService } from './media.service';

describe('Service: MediaService', () => {
  let service: MediaService;
  let movieServiceSpy;
  let tvShowServiceSpy;
  let scheduler;

  beforeEach(() => {
    movieServiceSpy = jasmine.createSpyObj('MovieService', ['searchMovies', 'getMovie', 'getCast']);
    tvShowServiceSpy = jasmine.createSpyObj('TvShowService', ['searchTvShows', 'getTvShow', 'getCast']);
    TestBed.configureTestingModule({
      providers: [
        {provide: MovieService, useValue: movieServiceSpy},
        {provide: TvShowService, useValue: tvShowServiceSpy},
      ]
    });
    service = TestBed.inject(MediaService);
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
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

  describe('#getSearchFormObservable', () => {
    let queryControl;
    let yearControl;
    let typeControl;

    beforeEach(() => {
      queryControl = new FormControl();
      yearControl = new FormControl();
      typeControl = new FormControl();
    });

    it('should be movie type by default and have an empty query field', async () => {
      scheduler.run(({expectObservable}) => {
        expectObservable(service.getSearchFormObservable(queryControl, yearControl, typeControl)).toBe('a', {
          a: {query: '', type: EType.Movie, year: NaN},
        });
      });
    });

    it('should wait 500ms before emitting query changes', () => {
      scheduler.run(({expectObservable, cold}) => {
        (queryControl as any).valueChanges = cold('ab', {a: 'custom', b: 'custom-query'});
        expectObservable(service.getSearchFormObservable(queryControl, yearControl, typeControl)).toBe('a 500ms b', {
          a: {query: '', type: EType.Movie, year: NaN},
          b: {query: 'custom-query', type: EType.Movie, year: NaN},
        });
      });
    });

    it('should wait 500ms before emitting year changes and parse it into number', () => {
      scheduler.run(({expectObservable, cold}) => {
        (yearControl as any).valueChanges = cold('abcd', {a: '2', b: '20', c: '202', d: '2020'});
        expectObservable(service.getSearchFormObservable(queryControl, yearControl, typeControl)).toBe('a-- 500ms b)', {
          a: {query: '', type: EType.Movie, year: NaN},
          b: {query: '', type: EType.Movie, year: 2020},
        });
      });
    });

    it('should change the media type', () => {
      scheduler.run(({expectObservable, cold}) => {
        (typeControl as any).valueChanges = cold('-a', {a: EType.TvShow});
        expectObservable(service.getSearchFormObservable(queryControl, yearControl, typeControl)).toBe('ab', {
          a: {query: '', type: EType.Movie, year: NaN},
          b: {query: '', type: EType.TvShow, year: NaN},
        });
      });
    });
  });

  describe('#getMediaDetails', () => {
    it('should call movie service when given a movie', () => {
      service.getMediaDetails(movies[0]);
      expect(movieServiceSpy.getMovie).toHaveBeenCalledWith(movies[0].id);
      expect(movieServiceSpy.getCast).toHaveBeenCalledWith(movies[0].id);
    });

    it('should call tvShow service when given a tvShow', () => {
      service.getMediaDetails(tvShows[0]);
      expect(tvShowServiceSpy.getTvShow).toHaveBeenCalledWith(tvShows[0].id);
      expect(tvShowServiceSpy.getCast).toHaveBeenCalledWith(tvShows[0].id);
    });

    it('should emit movie and cast wwhen given a movie', () => {
      scheduler.run(({expectObservable, cold}) => {
        movieServiceSpy.getMovie.and.returnValue(cold('a|', {a: movies[0]}));
        movieServiceSpy.getCast.and.returnValue(cold('--a|', {a: casts}));
        expectObservable(service.getMediaDetails(movies[0])).toBe('--a|', {a: [movies[0], casts]});
      });
    });

    it('should emit tvShow and cast when given a tvShow', () => {
      scheduler.run(({expectObservable, cold}) => {
        tvShowServiceSpy.getTvShow.and.returnValue(cold('a|', {a: tvShows[0]}));
        tvShowServiceSpy.getCast.and.returnValue(cold('--a|', {a: casts}));
        expectObservable(service.getMediaDetails(tvShows[0])).toBe('--a|', {a: [tvShows[0], casts]});
      });
    });
  });
});
