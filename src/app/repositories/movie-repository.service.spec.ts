import { TestBed } from '@angular/core/testing';

import { MovieRepository } from './movie-repository.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MovieRepository', () => {
  let service: MovieRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MovieRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
