import { TestBed } from '@angular/core/testing';

import { MovieRepository, MOVIE_API_BASE_URL } from './movie-repository.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiKeyService } from '../api-key/api-key.service';

describe('Service: MovieRepository', () => {
  let service: MovieRepository;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ApiKeyService', ['getKeyOrNavigate']);
    spy.getKeyOrNavigate.and.returnValue('abcdef');
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{
        provide: ApiKeyService, useValue: spy,
      }, {
        provide: MOVIE_API_BASE_URL, useValue: 'movie-api/'
      }]
    });
    service = TestBed.inject(MovieRepository);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('#getPopular', () => {
    it('should request with proper url and proper params and GET method', () => {
      service.getPopular().subscribe(() => {
      });

      const {request} = httpTestingController.expectOne(req => req.url === 'movie-api/movie/popular');
      expect(request.method).toBe('GET');
      expect(request.params.get('page')).toBe('1');
      expect(request.params.get('language')).toBe('en-US');
      expect(request.params.get('api_key')).toBe('abcdef');
    });
  });

  describe('#getById', () => {
    it('should request with proper url and proper params and GET method', () => {
      service.getById(7).subscribe(() => {
      });

      const {request} = httpTestingController.expectOne(req => req.url === 'movie-api/movie/7');
      expect(request.method).toBe('GET');
      expect(request.params.get('language')).toBe('en-US');
      expect(request.params.get('api_key')).toBe('abcdef');
    });
  });

  describe('#getMovieCredits', () => {
    it('should request with proper url and proper params and GET method', () => {
      service.getMovieCredits(7).subscribe(() => {
      });

      const {request} = httpTestingController.expectOne(req => req.url === 'movie-api/movie/7/credits');
      expect(request.method).toBe('GET');
      expect(request.params.get('api_key')).toBe('abcdef');
    });
  });

  describe('#search', () => {
    it('should request with proper url and proper params and GET method', () => {
      service.search({query: 'test'}).subscribe(() => {
      });

      const {request} = httpTestingController.expectOne(req => req.url === 'movie-api/search/movie');
      expect(request.method).toBe('GET');
      expect(request.params.get('language')).toBe('en-US');
      expect(request.params.get('api_key')).toBe('abcdef');
      expect(request.params.get('query')).toBe('test');
    });
  });
});
