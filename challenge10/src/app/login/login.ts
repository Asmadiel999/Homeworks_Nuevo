import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Auth } from '../services/auth'
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private auth = inject(Auth);
  private router = inject(Router);
  email = ''; clave = ''; msg = ''; 

  async entrar() {
    const {error} = await this.auth.entrar(this.email, this.clave);
    if (error) this.msg = error.message;
    else this.router.navigate(['/tareas']);
  }
  async registrar(){
    const{error} = await this.auth.registrar(this.email, this.clave);
    this.msg = error?.message ?? 'Revisa tu Correo'; 
  }

}
