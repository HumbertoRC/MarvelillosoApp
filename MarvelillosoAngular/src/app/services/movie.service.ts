import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovies1(): Observable<any> {
    return this.http.get('assets/data/movies1.json');
  }

  getMovies2(): Observable<any> {
    return this.http.get('assets/data/movies2.json');
  }

  getSeries(): Observable<any> {
    return this.http.get('assets/data/series.json');
  }
}



