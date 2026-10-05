import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BinaryTreeNumbers } from './binary-tree-numbers/binary-tree-numbers';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BinaryTreeNumbers],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('challenge6');
}
