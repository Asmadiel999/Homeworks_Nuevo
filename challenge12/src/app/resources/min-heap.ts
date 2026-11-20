export class MinHeap<T = number>{
    private heap: T[];
    private compare: (a: T, b:T) => number; 
    
    constructor(initial: T[] = [],
        compare: (a:T, b:T) => number = (a, b) => (a as number) - (b as number)
    ){
        this.heap = [];
        this.compare = compare; 

        if (initial.length > 0){
            this.heap = [...initial];
            this.heapify(); 
        }
    }

    push(value: T):void{
        this.heap.push(value);
        this.percolateUp();
    }

    pop():T | undefined{
        if (this.heap.length === 0) return undefined;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop() as T;
        this.percolateDown(0);
        return min;
    }

    heapify(): void{
        for (let i = Math.floor(this.heap.length/2)- 1; i >= 0; i-- ){
            this.percolateDown(i);
        }
    }

    percolateUp(): void {
        let index = this.heap.length - 1;

        while (index > 0){
            const parent = Math.floor((index-1)/2);

            if(this.compare(this.heap[index], this.heap[parent])>= 0) break;

            this.swap(index, parent);
            index = parent; 
        }
    }

    percolateDown(index: number): void{
        const length = this.heap.length;

        while (true) {
            const left = 2 * index + 1;
            const right = 2* index + 2;
            let smallest = index;

            if (left < length && this.compare(this.heap[left], this.heap[smallest]) < 0){
                smallest = left;
            }
            if (right < length && this.compare(this.heap[right], this.heap[smallest]) < 0){
                smallest = right;
            }
            if (smallest === index) break;

            this.swap(index, smallest);
            index = smallest;
        }
    }

    swap(i:number, j: number){
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    size(): number{
        return this.heap.length;
    }

    toArray(): T[]{
        return[...this.heap];
    }
}