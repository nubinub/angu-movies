import { TestBed } from '@angular/core/testing';

import { ApiKeyService } from './api-key.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('ApiKeyService', () => {
  let service: ApiKeyService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    service = TestBed.inject(ApiKeyService);
    router = TestBed.inject(Router);
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getKey', () => {
    it('should return the value of localstorage api_key', () => {
      localStorage.setItem('api_key', 'abcdef');
      expect(service.getKey()).toEqual('abcdef');
    });
  });

  describe('#setKey', () => {
    it('should set the value of localstorage api_key', () => {
      service.setKey('abcdef');
      expect(localStorage.getItem('api_key')).toEqual('abcdef');
    });
  });

  describe('#getKeyOrNavigate', () => {
    it('should redirect to settings page when no key', () => {
      spyOn(service, 'getKey').and.returnValue(undefined);
      const routerSpy = spyOn(router, 'navigate');
      service.getKeyOrNavigate();
      expect(routerSpy).toHaveBeenCalledWith(['/settings']);
    });

    it('should return the key when a key is provided', () => {
      spyOn(service, 'getKey').and.returnValue('abcdef');
      expect(service.getKeyOrNavigate()).toEqual('abcdef');
    });
  });
});
