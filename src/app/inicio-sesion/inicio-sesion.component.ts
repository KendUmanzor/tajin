import { Component } from '@angular/core';
import { Validators,FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [],
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.scss'
})
export class InicioSesionComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    // Aquí puedes manejar la lógica de inicio de sesión
    console.log('Formulario válido:', this.loginForm.valid);
    console.log('Valores:', this.loginForm.value);
  }
}
