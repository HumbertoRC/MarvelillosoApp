import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5156/api/auth';

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap(response => {
        if (this.isBrowser()) {
          console.log('Login response:', response);
          localStorage.setItem('userId', response.userId);
          localStorage.setItem('username', response.username);
        }
      })
    );
  }

  logout() {
    if (this.isBrowser()) {
      localStorage.removeItem('userId');
      localStorage.removeItem('username');
    }
  }


  getUserId(): number | null {
    if (this.isBrowser()) {
      const id = localStorage.getItem('userId');
      return id ? parseInt(id, 10) : null;
    }
    return null;
  }

  getUsername(): string | null {
    return this.isBrowser() ? localStorage.getItem('username') : null;
  }

  isLoggedIn(): boolean {
    return this.getUserId() !== null;
  }
}
