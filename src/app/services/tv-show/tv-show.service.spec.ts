import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import EType from 'src/app/model/type/type-enum';
import { casts } from 'src/testing/data/casts.mock';
import { tvShows } from 'src/testing/data/tv-shows-mock';
import { TvShowRepository } from '../tv-show-repository/tv-show-repository.service';

import { TvShowService } from './tv-show.service';

describe('Service: TvShowService', () => {
  let service: TvShowService;
  let tvShowRepositorySpy;
  let scheduler: TestScheduler;

  beforeEach(() => {
    tvShowRepositorySpy = jasmine.createSpyObj('TvShowRepository', ['getPopular', 'search', 'getById', 'getTvShowCredits']);
    tvShowRepositorySpy.search.and.returnValue(of(tvShows));
    tvShowRepositorySpy.getPopular.and.returnValue(of(tvShows));
    tvShowRepositorySpy.getById.and.returnValue(of(tvShows[0]));
    tvShowRepositorySpy.getTvShowCredits.and.returnValue(of(casts));
    TestBed.configureTestingModule({
      providers: [
        {provide: TvShowRepository, useValue: tvShowRepositorySpy}
      ]
    });
    service = TestBed.inject(TvShowService);
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#searchTvShows', () => {
    it('should call TvShowRepository search when query given in params', () => {
      service.searchTvShows({query: 'test'});
      expect(tvShowRepositorySpy.search).toHaveBeenCalled();
    });

    it('should map the response results and enhance them with tv show type', () => {
      scheduler.run(({expectObservable, cold}) => {
        tvShowRepositorySpy.search.and.returnValue(cold('a', {a: {results: [{}]}}));
        service.searchTvShows({query: 'test'});
        expectObservable(service.searchTvShows({query: 'test'})).toBe('a', {a: [{type: EType.TvShow}]});
      });
    });

    it('should call getDefaultTvShows when no query given in params', () => {
      const spy = spyOn(service, 'getDefaultTvShows');
      service.searchTvShows({});
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('#getDefaultTvShows', () => {
    it('should call TvShowRepository getPopular', () => {
      service.getDefaultTvShows();
      expect(tvShowRepositorySpy.getPopular).toHaveBeenCalled();
    });

    it('should map the response results and enhance them with tv show type', () => {
      scheduler.run(({expectObservable, cold}) => {
        tvShowRepositorySpy.getPopular.and.returnValue(cold('a', {a: {results: [{}]}}));
        expectObservable(service.getDefaultTvShows()).toBe('a', {a: [{type: EType.TvShow}]});
      });
    });
  });

  describe('#getTvShow', () => {
    it('should call TvShowRepository getById with the given id', () => {
      service.getTvShow(5);
      expect(tvShowRepositorySpy.getById).toHaveBeenCalledWith(5);
    });

    it('should enhance the response with tv show type', () => {
      scheduler.run(({expectObservable, cold}) => {
        tvShowRepositorySpy.getById.and.returnValue(cold('a', {a: {}}));
        expectObservable(service.getTvShow(5)).toBe('a', {a: {type: EType.TvShow}});
      });
    });
  });

  describe('#getCast', () => {
    it('should call TvShowRepository getTvShowCredits with the given id', () => {
      service.getCast(5);
      expect(tvShowRepositorySpy.getTvShowCredits).toHaveBeenCalledWith(5);
    });

    it('should map the response cast', () => {
      scheduler.run(({expectObservable, cold}) => {
        tvShowRepositorySpy.getTvShowCredits.and.returnValue(cold('a', {a: {cast: casts}}));
        expectObservable(service.getCast(5)).toBe('a', {a: casts});
      });
    });
  });
});
