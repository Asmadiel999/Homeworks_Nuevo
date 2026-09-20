import { Component,  EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-anadir-contacto',
  imports: [],
  templateUrl: './anadir-contacto.html',
  styleUrl: './anadir-contacto.css',
})
export class AnadirContacto {
  @Output() agregarContacto = new EventEmitter<any>();

  agregar(){
    this.agregarContacto.emit();
  }

}
