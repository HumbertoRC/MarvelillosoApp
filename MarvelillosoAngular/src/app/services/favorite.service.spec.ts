import { TestBed } from '@angular/core/testing';
import { FavoriteService } from './favorite.service';

describe('FavoriteService', () => {
  let service: FavoriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteService);
  });

  it('debería agregarse un favorito', () => {
    service.addFavorite('123');
    expect(service.getFavorites()).toContain('123');
  });

  it('debería eliminar un favorito', () => {
    service.addFavorite('456');
    service.removeFavorite('456');
    expect(service.getFavorites()).not.toContain('456');
  });
});
