import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  usuario = signal<string | null>(null);

  login(email: string, password: string): boolean {
    if (email === 'usuario@gmail.com' && password === '789') {
      this.usuario.set(email);
      return true;
    }
    return false;
  }

  logout() {
    this.usuario.set(null);
  }
}