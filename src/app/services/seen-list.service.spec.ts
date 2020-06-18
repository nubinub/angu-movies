import { TestBed } from '@angular/core/testing';

import { SeenListService } from './seen-list.service';

describe('SeenListService', () => {
  let service: SeenListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeenListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
