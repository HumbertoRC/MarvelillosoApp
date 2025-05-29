import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {
  name: string = '';
  email = '';
  password = '';
  errorMessage = '';
  successMessage = '';


  constructor(private router: Router, private http: HttpClient) { }
  onRegister(): void {
    if (!this.email || !this.password || !this.name) {
      this.errorMessage = 'Completa todos los campos.';
      return;
    }

    const data = {
      email: this.email,
      username: this.name,
      password: this.password
    };

    this.http.post<any>('http://localhost:5156/api/auth/register', data).subscribe({
      next: (response) => {
        this.successMessage = response.message || '¡Registro exitoso!';
        this.errorMessage = '';
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1500);
      },
      error: (error) => {
        console.error('Error en el registro:', error);

        if (error.error && typeof error.error === 'object') {
          this.errorMessage = error.error.message || 'Error inesperado al registrar.';
        } else {
          this.errorMessage = 'Error inesperado al registrar.';
        }

        this.successMessage = '';
      }
    });
  }


  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

}
