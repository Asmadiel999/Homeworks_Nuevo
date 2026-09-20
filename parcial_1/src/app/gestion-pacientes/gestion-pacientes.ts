import { Component } from '@angular/core';


@Component({
  selector: 'app-gestion-pacientes',
  imports: [],
  templateUrl: './gestion-pacientes.html',
  styleUrl: './gestion-pacientes.css',
})
export class GestionPacientes {
  constructor() {

  }  
}

class Node<T> {
  public value: T;
  public next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null; 
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
    
    if (this.head.value === value) {
      this.head = this.head.next;

      if (!this.head) {
        this.tail = null; 
      }

      this.lenght--;
      return true; 
    }

    let current = this.head;

    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      if (current.next === this.tail) {
        this.tail = current;
      }

      current.next = current.next.next; 
      this.lenght--;
      return true;
    }

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

