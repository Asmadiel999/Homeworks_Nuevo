import { Component } from '@angular/core';

@Component({
  selector: 'app-medicos',
  imports: [],
  templateUrl: './medicos.html',
  styleUrl: './medicos.css',
})
export class Medicos {}

class Node<T> {
  public value: T;
  public next: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

export class LinkedList<T> {
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
      this.tail = newNode;
      newNode.next = this.head; 
    } else if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = this.head; 
    }
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


  remove(value: T): boolean {
    if (!this.head) return false;

    let current = this.head;
    let previous: Node<T> | null = this.tail;

   
    do {
      if (current.value === value) {

        if (this.lenght === 1) {
          this.head = null;
          this.tail = null;
        } 
     
        else if (current === this.head) {
          this.head = this.head.next;
          if (this.tail) this.tail.next = this.head; 
        } 
      
        else if (current === this.tail) {
          this.tail = previous;
          if (this.tail) this.tail.next = this.head;
        } 
        
        else if (previous) {
          previous.next = current.next;
        }

        this.lenght--;
        return true;
      }
      previous = current;
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
