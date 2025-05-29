import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MovieService } from './movie.service';

describe('MovieService', () => {
  let service: MovieService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService]
    });

    service = TestBed.inject(MovieService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifica que no haya solicitudes pendientes
  });

  it('debería obtener movies1.json', () => {
    const mockData = [{ title: 'Pelicula 1' }];

    service.getMovies1().subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne('assets/data/movies1.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  it('debería obtener series.json', () => {
    const mockSeries = [{ title: 'Serie A' }];

    service.getSeries().subscribe(data => {
      expect(data).toEqual(mockSeries);
    });

    const req = httpMock.expectOne('assets/data/series.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockSeries);
  });
});
