import { Component } from '@angular/core';

@Component({
  selector: 'app-comite-administrativo',
  imports: [],
  templateUrl: './comite-administrativo.html',
  styleUrl: './comite-administrativo.css',
})
export class ComiteAdministrativo {}


class Node<T> {
  public value: T;
  public next: Node<T> | null = null;
  public previous: Node<T> | null = null; 

  constructor(value: T) {
    this.value = value;
  }
}


export class LinkedList<T> {
  private head: Node<T> | null = null;
  private length: number = 0; 

  
 
  append(value: T): void {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      newNode.next = newNode;
      newNode.previous = newNode;
    } else {
      const tail = this.head.previous!; 

      tail.next = newNode;
      newNode.previous = tail;
      newNode.next = this.head;
      this.head.previous = newNode;
    }
    this.length++;
  }

  peek(value: T): Node<T> | null {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return current;
      }

      current = current.next;
    }
    return null; 
  }

  get size(): number {
    return this.length;
  }

  remove(value: T): boolean {
    if (!this.head) return false;

    let current = this.head;


    do {
      if (current.value === value) {
   
        if (this.length === 1) {
          this.head = null;
        } 
    
        else {
          const prevNode = current.previous!;
          const nextNode = current.next!;

          prevNode.next = nextNode;
          nextNode.previous = prevNode;

      
          if (current === this.head) {
            this.head = nextNode;
          }
        }

        this.length--;
        return true;
      }
      current = current.next!;
    } while (current !== this.head);

    return false; 
  }

  print() {
    let current = this.head;
    let result = ""; 

    while (current) {
      result += current.value + " -> ";
      current = current.next; 
    }

    console.log(result + "null");
  }
}
