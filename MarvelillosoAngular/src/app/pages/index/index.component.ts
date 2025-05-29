import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { FavoriteService } from '../../services/favorite.service';
import { AuthService } from '../../services/auth.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  imports: [CommonModule, RouterModule, FormsModule]
})
export class IndexComponent implements OnInit {
  movies1: any[] = [];
  movies2: any[] = [];
  series: any[] = [];
  favorites: any[] = [];
  searchText: string = '';  //Variable para guardar texto de búsqueda
  public currentSection: 'movies' | 'series' | 'favorites' | 'all' = 'all';

  username: string | null = '';

  constructor(private movieService: MovieService, private favoriteService: FavoriteService, private authService: AuthService) { }

  ngOnInit() {

    this.username = this.authService.getUsername();

    this.movieService.getMovies1().subscribe((data: any) => this.movies1 = data.movies);
    this.movieService.getMovies2().subscribe((data: any) => this.movies2 = data.movies);
    this.movieService.getSeries().subscribe((data: any) => this.series = data.series);

    // Cargar favoritos desde backend
    this.favoriteService.getFavorites().subscribe((favoriteIds: number[]) => {
      // Unificamos todas las películas y series
      const allItems = [...this.movies1, ...this.movies2, ...this.series];
      // Filtramos los favoritos basándonos en los IDs que vienen del backend
      this.favorites = allItems.filter(item => favoriteIds.includes(item.id));
    });
  }


  // Filtra una lista según searchText (busca coincidencias en el título, ignorando mayúsculas)
  filterItems(items: any[]): any[] {
    if (!this.searchText) {
      return items;
    }
    const text = this.searchText.toLowerCase();
    return items.filter(item => item.title.toLowerCase().includes(text));
  }

  // Verifica si un ítem está en favoritos
  isFavorite(item: any): boolean {
    return this.favorites.some(fav => fav.id === item.id);
  }


  // Agrega o quita un ítem de favoritos
  toggleFavorite(item: any): void {
    const index = this.favorites.findIndex(fav => fav.id === item.id);

    if (index > -1) {
      // Eliminar de favoritos en backend
      this.favoriteService.removeFavorite(item.id).subscribe(() => {
        this.favorites.splice(index, 1);
      });
    } else {
      // Agregar a favoritos en backend
      this.favoriteService.addFavorite(item.id).subscribe(() => {
        this.favorites.push(item);
      });
    }
  }



  scrollLeft(track: HTMLElement): void {
    track.scrollBy({ left: -300, behavior: 'smooth' });
  }


  scrollRight(track: HTMLElement): void {
    track.scrollBy({ left: 300, behavior: 'smooth' });
  }


}
