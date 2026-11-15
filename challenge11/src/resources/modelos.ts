export class City{
    constructor(public name: string){}
}

export class Person{
    constructor(
        public name: string,
        public age: number,
        public city: City
    ){}
}