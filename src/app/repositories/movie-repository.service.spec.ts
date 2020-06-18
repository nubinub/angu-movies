import { TestBed } from '@angular/core/testing';

import { MovieRepository } from './movie-repository.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiKeyService } from '../services/api-key.service';

describe('MovieRepository', () => {
  let service: MovieRepository;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ApiKeyService', ['getKeyOrNavigate']);
    spy.getKeyOrNavigate.and.returnValue('abcef');
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{
        provide: ApiKeyService, useValue: spy,
      }]
    });
    service = TestBed.inject(MovieRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
