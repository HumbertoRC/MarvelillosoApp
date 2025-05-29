import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterComponent, FormsModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show error if email or password is missing', () => {
    component.email = '';
    component.password = '';
    component.onRegister();
    expect(component.errorMessage).toBe('Todos los campos son obligatorios.');
  });

  it('should show error if email already exists', () => {
    const email = 'ya@existe.com';
    localStorage.setItem(email, JSON.stringify({ password: '12345' }));

    component.email = email;
    component.password = '12345';
    component.onRegister();

    expect(component.errorMessage).toBe('El correo ya está registrado.');
  });

  it('should register user successfully', () => {
    const email = 'nuevo@correo.com';
    localStorage.removeItem(email); // Asegura que no exista

    component.email = email;
    component.password = 'abc123';
    component.onRegister();

    const storedUser = localStorage.getItem(email);
    expect(storedUser).not.toBeNull();
    expect(component.successMessage).toBe('Registro exitoso. Ya puedes iniciar sesión.');
  });
});
