import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, RouterTestingModule, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show error if user not found', () => {
    component.email = 'noexiste@email.com';
    component.password = '123';
    component.onLogin();
    expect(component.errorMessage).toBe('Usuario no registrado.');
  });

  it('should show error if password is incorrect', () => {
    localStorage.setItem('test@email.com', JSON.stringify({ password: 'correcta' }));
    component.email = 'test@email.com';
    component.password = 'incorrecta';
    component.onLogin();
    expect(component.errorMessage).toBe('Contraseña incorrecta.');
  });

  it('should login successfully with correct credentials', () => {
    localStorage.setItem('test@email.com', JSON.stringify({ password: '12345' }));
    component.email = 'test@email.com';
    component.password = '12345';
    component.onLogin();
    expect(component.successMessage).toBe('Inicio de sesión exitoso.');
  });
});
