import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BookManage} from './book-manage/book-manage';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BookManage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('challenge_4');
}
