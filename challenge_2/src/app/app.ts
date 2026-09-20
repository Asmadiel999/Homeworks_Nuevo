import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnadirContacto } from './anadir-contacto/anadir-contacto';
import { CommonModule } from '@angular/common';
import { EliminarContacto } from './eliminar-contacto/eliminar-contacto';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AnadirContacto, CommonModule, EliminarContacto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('challenge_2');

  contactos: Contacto[];

  constructor(){
    this.contactos = [];
  }

  agregar(nombre: string, numero: string){
     let contacto: Contacto;

     contacto = new Contacto(nombre, numero); 

     this.contactos.push(contacto)
  }

  eliminarContacto(){
    this.contactos.pop()
  }
}

class Contacto {
  public nombre: string;
  public numero: string; 
  
  constructor(nombre: string, numero: string) {
    this.nombre = nombre;
    this.numero = numero; 
  }

  mostrarInfo(){
    return `Nombre: ${this.nombre} y número: ${this.numero}`
  }
}

