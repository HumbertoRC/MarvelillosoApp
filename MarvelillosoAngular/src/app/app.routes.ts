import { Routes } from '@angular/router';
import { SuscripcionComponent } from './pages/suscripcion/suscripcion.component';
import { AyudaComponent } from './pages/ayuda/ayuda.component';


//LAZYLOAD
export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/index/index.component').then(m => m.IndexComponent),
  },
  { path: 'suscripcion', component: SuscripcionComponent },
  { path: 'ayuda', component: AyudaComponent },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.component').then(m => m.RegisterComponent)
  }


];
