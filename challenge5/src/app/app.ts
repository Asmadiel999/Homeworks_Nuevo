import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AtmQueue} from './atm-queue/atm-queue'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AtmQueue],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('challenge5');
}
