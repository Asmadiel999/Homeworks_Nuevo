export interface QueueAtm{
    name: string;
    withdrawalAmount: number; 
    date: string; 
}

export class Queue{
    items: QueueAtm[]; 

    constructor(){
        this.items = [];
    }

    enqueue(value: QueueAtm){
        this.items.push(value);
    }

    dequeue(){
        return this.items.length > 0 ? this.items.shift() : null; 
    }

    peek(){
        return this.items.length > 0 ? this.items[0]: null;
    }

    size(){
        return this.items.length; 
    }

    isEmpty(){
        return this.items.length === 0;
    }

    print() {
        this.items.forEach(value => {
            console.log(value);
        })
    }
}
