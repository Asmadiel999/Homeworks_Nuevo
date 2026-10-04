import { Component, OnInit } from '@angular/core';
import {BookStack} from '../../resources/book-stack'

@Component({
  selector: 'app-book-manage',
  imports: [],
  templateUrl: './book-manage.html',
  styleUrl: './book-manage.css',
})
export class BookManage {
  book = new BookStack();

  ngOnInit(){
    this.book.push({name: 'Jack El destripador', isbn: '978-84-08', author: 'Patricia', editorial: 'Relatos de Terror'})
    this.book.push({name: 'El resplandor', isbn: '978-84-08', author: 'Stephen King', editorial: 'Relatos de Terror'})
    this.book.push({name: 'El exorcista', isbn: '978-84-08', author: 'William Peter Blatty', editorial: 'Relatos de Terror'})
    this.book.push({name: 'El silencio de los corderos', isbn: '978-84-08', author: 'Thomas Harris', editorial: 'Relatos de Terror'})
  }

}
