import { Component } from '@angular/core';

@Component({
  selector: 'app-historial-atencion',
  imports: [],
  templateUrl: './historial-atencion.html',
  styleUrl: './historial-atencion.css',
})
export class HistorialAtencion {}

class Node<T> {
  public value: T;
  public next: Node<T> | null;
  public previous: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.previous = null; 
  }
}

class LinkedList<T> {
  public head: Node<T> | null = null; 
  public tail: Node<T> | null = null;
  public lenght: number = 0;

  constructor() {
    this.head = null; 
    this.tail = null; 
    this.lenght = 0; 
  }

  append(value: T): void {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    }else {
      if (this.tail) {
        this.tail.next = newNode;
        newNode.previous = this.tail;
      }
    }

    this.tail = newNode;
    this.lenght++;
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
    return this.lenght;
  }

  remove (value: T): boolean{
    if (!this.head) return false;

    let current: Node<T> | null = this.head; 

    while (current && current.value !== value) {
      current = current.next;
    }

    if (!current) return false;

    if (current === this.head) {
      this.head = current.next;
      if (this.head) {
        this.head.previous = null;
      }else {
        this.tail = null; 
      }
    }else if (current === this.tail) { 
      this.tail = current.previous;
      if (this.tail) {
        this.tail.next = null; 
      }
    } else {
      if (current.previous) current.previous.next = current.next;
      if (current.next) current.next.previous = current.previous;
    }

    this.lenght--;
    return true; 
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
