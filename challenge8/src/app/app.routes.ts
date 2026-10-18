import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Tareas } from './tareas/tareas';
import { Libros } from './libros/libros';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'tareas', component: Tareas, canActivate: [authGuard] },
  { path: 'libros', component: Libros, canActivate: [authGuard] },
  { path: '**', redirectTo: 'login' },
];