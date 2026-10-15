export class NodoNario<T> {
    value: T;
    hijos: NodoNario<T>[]; 

    constructor(value: T){
        this.value = value; 
        this.hijos = [];
    }

    añadirHijo(valorHijo: T): NodoNario<T>{
        const nuevoNodo = new NodoNario(valorHijo);
        this.hijos.push(nuevoNodo);
        return nuevoNodo; 
    }
}

export class ArbolNario<T> {
    raiz: NodoNario<T> | null = null; 

    constructor(valorRaiz: T){
        if (valorRaiz !== null){
            this.raiz = new NodoNario(valorRaiz);
        }
    }

    dfs(nodo: NodoNario<T> | null = this.raiz): void{
        if (!nodo) return;

        console.log(nodo.value)
        for (let hijo of nodo.hijos){
            this.dfs(hijo); 
        }

    }

    bfs(): any {
        if(!this.raiz) return;

        const cola: NodoNario<T>[] = [this.raiz]; 
        const lista: NodoNario<T>[] = [];

        while(cola.length > 0){
            const actual = cola.shift()!; 
            console.log(actual.value);
            cola.push(...actual.hijos);
            lista.push(...actual.hijos);
        }

        return lista;
    }
}
