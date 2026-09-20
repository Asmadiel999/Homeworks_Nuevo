import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SongPlaylist } from './song-playlist/song-playlist';
import { Website } from './website/website';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SongPlaylist, Website],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('challenge_3');
}
