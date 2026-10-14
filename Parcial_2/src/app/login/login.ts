import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { auth } from '../../firebase/config';
import { Router, RouterLink } from '@angular/router';
import { signInWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = signal<string>('');
  contrasena = signal<string>('');

  private router = inject(Router);

  async handleLogin() {
    try {
      await signInWithEmailAndPassword(auth, this.email(), this.contrasena());
      this.router.navigate(['/inicio']);
    } catch (error: any) {
      alert(error.message);
    }
  }
}
