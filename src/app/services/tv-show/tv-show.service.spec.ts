import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { casts } from 'src/testing/mock/casts.mock';
import tvShows from 'src/testing/mock/tv-shows-mock';
import { TvShowRepository } from '../tv-show-repository/tv-show-repository.service';

import { TvShowService } from './tv-show.service';

describe('Service: TvShowService', () => {
  let service: TvShowService;
  let tvShowRepositorySpy;

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
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#searchTvShows', () => {
    it('should call TvShowRepository search when query given in params', () => {
      service.searchTvShows({query: 'test'});
      expect(tvShowRepositorySpy.search).toHaveBeenCalled();
    });

    it('should call TvShowRepository getPopular when no query given in params', () => {
      service.searchTvShows({});
      expect(tvShowRepositorySpy.getPopular).toHaveBeenCalled();
    });
  });

  describe('#getDefaultTvShows', () => {
    it('should call TvShowRepository getPopular', () => {
      service.getDefaultTvShows();
      expect(tvShowRepositorySpy.getPopular).toHaveBeenCalled();
    });
  });

  describe('#getTvShow', () => {
    it('should call TvShowRepository getById with the given id', () => {
      service.getTvShow(5);
      expect(tvShowRepositorySpy.getById).toHaveBeenCalledWith(5);
    });
  });

  describe('#getCast', () => {
    it('should call TvShowRepository getTvShowCredits with the given id', () => {
      service.getCast(5);
      expect(tvShowRepositorySpy.getTvShowCredits).toHaveBeenCalledWith(5);
    });
  });
});
