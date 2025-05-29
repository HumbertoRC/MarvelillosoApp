import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndexComponent } from './index.component';
import { MovieService } from '../../services/movie.service';
import { of } from 'rxjs';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;
  let movieServiceStub: Partial<MovieService>;

  beforeEach(() => {
    movieServiceStub = {
      getMovies1: () => of({ movies: [{ title: 'Peli1' }] }),
      getMovies2: () => of({ movies: [{ title: 'Peli2' }] }),
      getSeries: () => of({ series: [{ title: 'Serie1' }] })
    };

    TestBed.configureTestingModule({
      imports: [IndexComponent],
      providers: [{ provide: MovieService, useValue: movieServiceStub }]
    });

    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Llama a ngOnInit()
  });

  it('debería cargar movies1, movies2 y series en ngOnInit', () => {
    expect(component.movies1.length).toBe(1);
    expect(component.movies2.length).toBe(1);
    expect(component.series.length).toBe(1);
  });

  it('debería agregar y quitar favoritos', () => {
    const item = { title: 'PeliX' };

    expect(component.isFavorite(item)).toBeFalse();

    component.toggleFavorite(item);
    expect(component.isFavorite(item)).toBeTrue();

    component.toggleFavorite(item);
    expect(component.isFavorite(item)).toBeFalse();
  });

  it('debería llamar scrollLeft y scrollRight', () => {
    const mockElement = { scrollBy: jasmine.createSpy() } as any;
    component.scrollLeft(mockElement);
    component.scrollRight(mockElement);

    expect(mockElement.scrollBy).toHaveBeenCalledTimes(2);
  });
});
