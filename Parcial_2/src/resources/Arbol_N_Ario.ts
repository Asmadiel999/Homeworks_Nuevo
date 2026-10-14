// models/item-fs.ts
export interface ItemFS {
  nombre: string;
  tipo: 'carpeta' | 'archivo';
  abierto?: boolean; // solo para carpetas
}

export class NodoNario<T> {
  valor: T;
  hijos: NodoNario<T>[] = [];

  constructor(valor: T) {
    this.valor = valor;
  }

  añadirHijos(valorHijo: T): NodoNario<T> {
    const nuevoNodo = new NodoNario(valorHijo);
    this.hijos.push(nuevoNodo);
    return nuevoNodo;
  }
}

export class ArbolNario<T> {
  raiz: NodoNario<T> | null = null;

  constructor(valorRaiz: T) {
    if (valorRaiz !== null) {
      this.raiz = new NodoNario(valorRaiz);
    }
  }

  bfs(): NodoNario<T>[] {
    if (!this.raiz) return [];
    const cola: NodoNario<T>[] = [this.raiz];
    const lista: NodoNario<T>[] = [];

    while (cola.length > 0) {
      const actual = cola.shift()!;
      lista.push(actual);          // ahora incluye la raíz
      cola.push(...actual.hijos);
    }
    return lista;
  }

  eliminar(nodo: NodoNario<T>): boolean {
    if (!this.raiz || nodo === this.raiz) return false;
    for (const n of this.bfs()) {
      const i = n.hijos.indexOf(nodo);
      if (i >= 0) {
        n.hijos.splice(i, 1);
        return true;
      }
    }
    return false;
  }
}