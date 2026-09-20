import { Component, OnInit } from '@angular/core';
import { PlayList, Song } from './lista-enlazada';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-song-playlist',
  imports: [NgIf],
  templateUrl: './song-playlist.html',
  styleUrl: './song-playlist.css',
})
export class SongPlaylist implements OnInit {
  playList = new PlayList();
  nowPlaying: Song | null = null; 

  ngOnInit(){
    this.playList.append({id: 1, title: 'Back to Black'});
    this.playList.append({id: 2, title: 'I got no time'});
    this.playList.append({id: 3, title: 'I cant fix you'});

    this.nowPlaying = this.playList.currentSong ? this.playList.currentSong.song: null; 
  }

  onNext() {
    const next = this.playList.nextSong();
    if (next) {
      this.nowPlaying = next; 
    }else{
      alert("Final de la Lista")
    }
  }
}
