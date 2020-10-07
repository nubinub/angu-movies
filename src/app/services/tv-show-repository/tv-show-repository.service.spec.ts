import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ApiKeyService } from '../api-key/api-key.service';
import { MOVIE_API_BASE_URL } from '../movie-repository/movie-repository.service';

import { TvShowRepository } from './tv-show-repository.service';

describe('TvShowRepositoryService', () => {
  let service: TvShowRepository;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ApiKeyService', ['getKeyOrNavigate']);
    spy.getKeyOrNavigate.and.returnValue('abcef');
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {provide: ApiKeyService, useValue: spy},
        {provide: MOVIE_API_BASE_URL, useValue: 'movie-api/'},
      ]
    });
    service = TestBed.inject(TvShowRepository);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#search', () => {
    it('should request the proper url with the proper query params with GET method', () => {
      service.search({query: 'test'}).subscribe();
      const { request } = httpTestingController.expectOne(req => req.url === 'movie-api/search/tv');
      expect(request.method).toEqual('GET');
      expect(request.params.get('api_key')).toEqual('abcef');
      expect(request.params.get('page')).toEqual('1');
      expect(request.params.get('language')).toEqual('en-US');
      expect(request.params.get('query')).toEqual('test');
    });

    it('should request with first_air_date_year when given first_air_date_year', () => {
      service.search({query: 'test', first_air_date_year: 2020}).subscribe();
      const { request } = httpTestingController.expectOne(req => req.url === 'movie-api/search/tv');
      expect(request.params.get('first_air_date_year')).toEqual('2020');
    });
  });

  describe('#getById', () => {
    it('should request the proper url with the proper query params with GET method', () => {
      service.getById(7).subscribe();
      const { request } = httpTestingController.expectOne(req => req.url === 'movie-api/tv/7');
      expect(request.method).toEqual('GET');
      expect(request.params.get('api_key')).toEqual('abcef');
      expect(request.params.get('language')).toEqual('en-US');
    });
  });

  describe('#getPopular', () => {
    it('should request the proper url with the proper query params with GET method', () => {
      service.getPopular().subscribe();
      const { request } = httpTestingController.expectOne(req => req.url === 'movie-api/tv/popular');
      expect(request.method).toEqual('GET');
      expect(request.params.get('api_key')).toEqual('abcef');
      expect(request.params.get('language')).toEqual('en-US');
      expect(request.params.get('page')).toEqual('1');
    });
  });

  describe('#getTvShowCredits', () => {
    it('should request the proper url with the proper query params with GET method', () => {
      service.getTvShowCredits(7).subscribe();
      const { request } = httpTestingController.expectOne(req => req.url === 'movie-api/tv/7/credits');
      expect(request.method).toEqual('GET');
      expect(request.params.get('api_key')).toEqual('abcef');
    });
  });
});
