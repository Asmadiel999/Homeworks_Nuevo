import { Injectable } from '@angular/core';
import { MinHeap } from '../resources/min-heap';

export interface atributos {
  name: string;
  popularity: number;
}

class Node{
  children = new Map<string, Node>();
  isEndOfWord = false;
  data?: atributos;
}

@Injectable({
  providedIn: 'root',
})

export class TrieService {
  private root = new Node();

  insert(item: atributos): void{
    let current = this.root;

    for (let character of item.name.toLowerCase()){
      if (!current.children.has(character)){
        current.children.set(character, new Node());
      }

      current = current.children.get(character)!
    }

    current.isEndOfWord = true; 
    current.data = item; 
  }

  buscar(palabra: string): atributos | undefined{
    const node = this.findNode(palabra);
    return node?.isEndOfWord ? node.data : undefined;
    
  }

  autocompletar(prefijo: string, limite = 10): atributos[]{
    const start = this.findNode(prefijo);
    if (!start) return [];

    const result: atributos[] = [];
    this.collect(start, result);

    return result
          .sort((a, b) => b.popularity - a.popularity)
          .slice(0, limite);

  }

  private findNode(texto: string): Node | undefined{
    let current = this.root;

    for (const character of texto.toLowerCase()){
      const next = current.children.get(character);
      if(!next) return undefined;

      current = next;
    }

    return current;
  }

  private collect(node: Node, resultados: atributos[]): void{
    if(node.isEndOfWord && node.data){
      resultados.push(node.data);
    }

    for (const hijo of node.children.values()){
      this.collect(hijo, resultados);
    }
  }

  topK(k: number, prefijo = ''):atributos[]{
    const start = this.findNode(prefijo);
    if (!start) return [];

    const heap = new MinHeap<atributos>(
      [], (a, b) => a.popularity - b.popularity
    );

    this.collectTop(start, heap, k);

    return heap.toArray().sort((a,b)=>b.popularity - a.popularity)
  }

  private collectTop(node: Node, heap: MinHeap<atributos>, k: number): void{
    if (node.isEndOfWord && node.data){
      heap.push(node.data)
      if (heap.size() > k){
        heap.pop();
      }
    }

    for (const child of node.children.values()){
      this.collectTop(child, heap, k)
    }
  }

}

