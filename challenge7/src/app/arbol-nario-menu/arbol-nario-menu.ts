import { Component, Input, OnInit, signal} from '@angular/core';
import { NodoNario, ArbolNario } from '../../resources/nary-tree';
import { NgTemplateOutlet } from '../../../node_modules/@angular/common/types/_common_module-chunk';

@Component({
  selector: 'app-arbol-nario-menu',
  imports: [],
  templateUrl: './arbol-nario-menu.html',
  styleUrl: './arbol-nario-menu.css',
})

export class ArbolNarioMenu implements OnInit {
  tree = new ArbolNario<string>('Menú');
  cola = signal<any[]>([ ]);

  ngOnInit(): void {
    const raiz = this.tree.raiz; 

    const menu1 = raiz?.añadirHijo('Perfil');
    const menu2 = raiz?.añadirHijo('Herramientas')
    const menu3 = raiz?.añadirHijo('Ayuda')

    menu1?.añadirHijo('¿Quién soy?');
    menu1?.añadirHijo('A qué me dedico');
    menu2?.añadirHijo('Caja')
    menu3?.añadirHijo('FAQ')

    this.cola.set(this.tree.bfs())
  }
}
