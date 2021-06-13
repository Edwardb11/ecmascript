//clases
//programacion orientada a objetos

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    // estos son metodos
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB
    }

    multiplica(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA * this.valueB
    }
}

const calc = new calculator();

console.log(calc.sum(2, 5));
//console.log(calc.multiplica(2, 5));


//import y export
import { hello } from './module'

console.log(hello())


function* helloWord() {
    if (true) {
        yield 'Hello, ';
    }

    if (true) {
        yield 'World';
    }
};
const generatorHello = helloWord();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value); //como ya no tenemos valor nos manda defaul

//este caso es muy utili para fibonacci