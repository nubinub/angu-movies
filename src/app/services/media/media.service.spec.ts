import { TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { TestScheduler } from 'rxjs/testing';
import EType from 'src/app/model/type/type-enum';
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
    movieServiceSpy = jasmine.createSpyObj('MovieService', ['searchMovies']);
    tvShowServiceSpy = jasmine.createSpyObj('TvShowService', ['searchTvShows']);
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
});
