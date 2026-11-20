import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Gif, GiphyService } from './giphy-service';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('challenge13');

  private giphy = inject(GiphyService);

  query = ''; 
  gifs = signal<Gif[]> ([]);
  loading = signal(false);
  error = signal('');

  async Buscar(){
    if(!this.query.trim()) return;

    this.loading.set(true);
    this.error.set('');

    try {
      this.gifs.set(await this.giphy.search(this.query.trim()));
    }catch(e){
      this.error.set('No se pudieron cargar los gifs.')
    }finally{
      this.loading.set(false);
    }
  }

}
