import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';  
import { HttpClientModule } from '@angular/common/http';



const routes: Routes = [
  { path: '', component: LoginComponent }  // ruta para el LoginComponent
];

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
