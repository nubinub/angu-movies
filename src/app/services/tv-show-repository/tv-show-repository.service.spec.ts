import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ApiKeyService } from '../api-key/api-key.service';
import { MOVIE_API_BASE_URL } from '../movie-repository/movie-repository.service';

import { TvShowRepositoryService } from './tv-show-repository.service';

describe('TvShowRepositoryService', () => {
  let service: TvShowRepositoryService;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ApiKeyService', ['getKeyOrNavigate']);
    spy.getKeyOrNavigate.and.returnValue('abcef');
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {provide: ApiKeyService, useValue: spy},
        {provide: MOVIE_API_BASE_URL, useValue: 'movie-api'},
      ]
    });
    service = TestBed.inject(TvShowRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
