import { Injectable, signal } from '@angular/core';
import { City, Person } from '../resources/modelos';

export interface NodeData{
  label: string;
  type: 'city' | 'person';
  x?: number;
  y?: number; 
}

export interface LinkData{
  source: NodeData;
  target: NodeData;

}

@Injectable({
  providedIn: 'root',
})


export class GraphService {
  cities: City[] = [];
  private adjList = new Map<City, Person[]>();

  changes = signal(0);

  addCity(name: string):void{
    const city = new City(name);
    this.cities.push(city);
    this.adjList.set(city, []);
    this.changes.update(n => n+1);
  }

  addPerson(name: string, age: number, city:City){
    const person = new Person(name, age, City);
    this.adjList.get(city)!.push(person);
    this.changes.update(n => n+1);
  }

  getPeopleInCity(city:City): Person[]{
    return this.adjList.get(city) ?? []; 
  }

  printPeopleInCity(city: City): void{
    console.log(this.getPeopleInCity(city));
  }

  getGraphData(){
    const nodes: NodeData[]=[];
    const links: LinkData[]=[];

    for (const city of this.cities){
      const cityNode: NodeData = {label: city.name, type: 'city'}
      nodes.push(cityNode);

      for (const person of this.getPeopleInCity(city)){
        const personNode: NodeData = {label: person.name, type: 'person'};
        nodes.push(personNode);
        links.push({source:personNode, target: cityNode})
      }
    }

    return {nodes, links};
    
  }
}
