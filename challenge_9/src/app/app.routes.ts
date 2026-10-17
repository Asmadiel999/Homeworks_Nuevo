import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Registro } from './registro/registro';
import { TareasApp } from './tareas-app/tareas-app';
import { NoEncontrado } from './no-encontrado/no-encontrado';

export const routes: Routes = [
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: 'inicio', component: Login},
    {path: 'registro', component: Registro},
    {path: 'tareas', component: TareasApp},
    {path: '**', component: NoEncontrado}
];
