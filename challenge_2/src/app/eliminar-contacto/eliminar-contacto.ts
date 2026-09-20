import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-eliminar-contacto',
  imports: [],
  templateUrl: './eliminar-contacto.html',
  styleUrl: './eliminar-contacto.css',
})
export class EliminarContacto {
  @Output() eliminar = new EventEmitter<any>();

  eliminarContacto(){
    this.eliminar.emit();
  }
}
