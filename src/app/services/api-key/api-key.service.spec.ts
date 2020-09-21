import { TestBed } from '@angular/core/testing';

import { ApiKeyService } from './api-key.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('ApiKeyService', () => {
  let service: ApiKeyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    service = TestBed.inject(ApiKeyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
