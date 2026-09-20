import { Component, OnInit } from '@angular/core';
import { PageList, pageA } from './double-linked-list';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-website',
  imports: [NgIf],
  templateUrl: './website.html',
  styleUrl: './website.css',
})
export class Website implements OnInit {
  newPage = new PageList();
  nowPlaying: pageA | null = null; 

  ngOnInit(){
      this.newPage.append({nombre: "Página 1"})
      this.newPage.append({nombre: "Página 2"})
      this.newPage.append({nombre: "Página 3"})

      this.nowPlaying = this.newPage.currentPage ? this.newPage.currentPage.page: null;  
  }

  onNext(){
    const next = this.newPage.nextPage();

    if (next){
      this.nowPlaying = next; 
    }else{
      alert("No hay más páginas delante")
    }
  }

  onPrev(){
    const prev = this.newPage.prevPage();
    if (prev){
      this.nowPlaying = prev; 
    }else{
      alert("No hay más páginas atrás")
    }
  }
}
