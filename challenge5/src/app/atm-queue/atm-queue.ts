import { Component, OnInit } from '@angular/core';
import {Queue} from '../../resources/queue'

@Component({
  selector: 'app-atm-queue',
  imports: [],
  templateUrl: './atm-queue.html',
  styleUrl: './atm-queue.css',
})
export class AtmQueue {
  queue = new Queue(); 

  ngOnInit(){
    this.queue.enqueue({name: 'John Doe', withdrawalAmount: 100, date: '2023-01-01'});
    this.queue.enqueue({name: 'Jane Smith', withdrawalAmount: 200, date: '2023-01-02'});
    this.queue.enqueue({name: 'Jhonatan', withdrawalAmount: 2000, date: '2026-01-21'})
   
    //this.queue.dequeue() si se utiliza se borra el primero de la lista

  }

}
