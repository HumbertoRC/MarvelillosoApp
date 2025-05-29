import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private apiUrl = 'http://localhost:5156/api/favorites';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getFavorites(): Observable<number[]> {
    const userId = this.authService.getUserId();
    if (userId === null) {
      return of([]); // Devuelve array vacío si no hay sesión
    }
    return this.http.get<number[]>(`${this.apiUrl}/${userId}`);
  }

  addFavorite(movieId: number): Observable<any> {
    const userId = this.authService.getUserId();
    if (userId === null) {
      console.error('No se puede agregar favorito: userId es null');
      return of(null);
    }
    return this.http.post(`${this.apiUrl}/add`, { userId, movieId });
  }

  removeFavorite(movieId: number): Observable<any> {
    const userId = this.authService.getUserId();
    if (userId === null) {
      console.error('No se puede eliminar favorito: userId es null');
      return of(null);
    }
    return this.http.request('delete', `${this.apiUrl}/remove`, {
      body: { userId, movieId }
    });
  }
}
