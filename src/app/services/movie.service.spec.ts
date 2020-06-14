import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';
import { MovieRepository } from '../repositories/movie-repository.service';

describe('MovieService', () => {
  let service: MovieService;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('MovieRepository', ['getPopular']);
    TestBed.configureTestingModule({
      providers: [
        {provide: MovieRepository, useValue: spy}
      ]
    });
    service = TestBed.inject(MovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
