import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { GraphService } from './graph.service';
import { City } from '../resources/modelos';
import { GraphView } from './graph-view/graph-view';

@Component({
  selector: 'app-root',
  imports: [FormsModule, GraphView],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('challenge11');

  graph = inject(GraphService);
  cityName = '';
  personName = '';
  personAge = 0;
  personCity?: City; 
  selectedCity?: City;


  addCity(){
    this.graph.addCity(this.cityName);
  }

  addPerson(){
    if(this.personCity){
      this.graph.addPerson(this.personName, this.personAge, this.personCity);
      this.personName = '';
      this.personAge = 0;
    }
  }
}

