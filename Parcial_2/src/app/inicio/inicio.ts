import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArbolNario, ItemFS, NodoNario } from '../../resources/Arbol_N_Ario';
@Component({
  selector: 'app-inicio',
  imports: [NgTemplateOutlet, FormsModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
  arbol = new ArbolNario<ItemFS>({ nombre: 'Mi unidad', tipo: 'carpeta', abierto: true });
  seleccionado: NodoNario<ItemFS> = this.arbol.raiz!;
  nombreNuevo = '';

  get puedeAgregar(): boolean {
    return this.seleccionado.valor.tipo === 'carpeta' && this.nombreNuevo.trim().length > 0;
  }

  seleccionar(nodo: NodoNario<ItemFS>) {
    this.seleccionado = nodo;
  }

  alternar(nodo: NodoNario<ItemFS>) {
    nodo.valor.abierto = !nodo.valor.abierto;
  }

  agregar(tipo: 'carpeta' | 'archivo') {
    if (!this.puedeAgregar) return;

    const nombre = this.nombreNuevo.trim();
    const yaExiste = this.seleccionado.hijos.some(
      h => h.valor.nombre.toLowerCase() === nombre.toLowerCase()
    );
    if (yaExiste) {
      alert('Ya existe un elemento con ese nombre en esta carpeta');
      return;
    }

    this.seleccionado.añadirHijos(
      tipo === 'carpeta' ? { nombre, tipo, abierto: false } : { nombre, tipo }
    );
    this.seleccionado.valor.abierto = true; // muestra lo recién creado
    this.nombreNuevo = '';
  }

  eliminar() {
    if (this.arbol.eliminar(this.seleccionado)) {
      this.seleccionado = this.arbol.raiz!;
    }
  }
}

