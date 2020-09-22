import { TestBed } from '@angular/core/testing';

import { MovieRepository, MOVIE_API_BASE_URL } from './movie-repository.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiKeyService } from '../api-key/api-key.service';

describe('MovieRepository', () => {
  let service: MovieRepository;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ApiKeyService', ['getKeyOrNavigate']);
    spy.getKeyOrNavigate.and.returnValue('abcef');
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{
        provide: ApiKeyService, useValue: spy,
      }, {
        provide: MOVIE_API_BASE_URL, useValue: 'movie-api'
      }]
    });
    service = TestBed.inject(MovieRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
