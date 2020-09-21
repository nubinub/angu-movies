import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiKeyService {
  constructor(private router: Router) {
  }

  getKey(): string {
    return localStorage.getItem('api_key');
  }

  getKeyOrNavigate(): string {
    const key = this.getKey();
    if (!key) {
      this.router.navigate(['/settings']);
    }
    return key;
  }

  setKey(key: string): void {
    return localStorage.setItem('api_key', key);
  }
}
