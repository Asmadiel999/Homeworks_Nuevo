import { Attribute, Component, inject } from '@angular/core';
import { atributos, TrieService } from '../services/trie-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trie-component',
  imports: [FormsModule],
  templateUrl: './trie-component.html',
  styleUrl: './trie-component.css',
})

export class TrieComponent {
  trie = inject(TrieService);

  nombre = "";
  popularidad = 0; 
  prefijo = '';
  sugerencias: atributos[] = [];
  k = 0;
  top: atributos[] = [];

  agregar():void{
    if (!this.nombre.trim()) return; 

    this.trie.insert({
      name: this.nombre.trim(),
      popularity: this.popularidad
    });

    this.nombre = '';
    this.popularidad = 0;
    this.buscarSugerencia();
  }

  buscarSugerencia(): void{
    this.sugerencias = this.prefijo ? this.trie.autocompletar(this.prefijo): []; 
  }

  mostrarTop(): void{
    this.top = this.trie.topK(this.k);
  }
}
