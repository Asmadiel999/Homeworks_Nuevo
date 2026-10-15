import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArbolNarioMenu } from './arbol-nario-menu/arbol-nario-menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ArbolNarioMenu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('challenge7');
}
