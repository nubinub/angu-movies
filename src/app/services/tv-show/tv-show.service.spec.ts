import { TestBed } from '@angular/core/testing';

import { TvShowService } from './tv-show.service';

describe('TvShowService', () => {
  let service: TvShowService;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('TvShowRepository', ['getPopular', 'search']);
    TestBed.configureTestingModule({
      providers: [
        {provide: TvShowService, useValue: spy}
      ]
    });
    service = TestBed.inject(TvShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
