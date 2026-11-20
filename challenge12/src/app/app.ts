import { Component, signal } from '@angular/core';
import { TrieComponent } from './trie-component/trie-component';

@Component({
  selector: 'app-root',
  imports: [TrieComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('challenge12');
}
