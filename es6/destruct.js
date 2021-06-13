function newFunction(name, age, country) {
    var name = name || "Edward"; //Por defecto tomara nombre que asignemos por parametros o Edward
    var age = age || 19;
    var country = country || "La Vega";
    console.log(name, age, country)

}

//es6
function newFunction2(name = 'Edward', age = 19, country = 'La Vega 1') {
    console.log(name, age, country)
}

newFunction()
newFunction2()
newFunction2("Rosa", 19, "La Vega")

let hello = "Hello";
let world = "World";
let conct = hello + ' ' + world;
console.log(conct);
let conct2 = `${hello} ${world}`; //Forma mas util
console.log(conct2);


//Multilinea
let lorem = "loremp  insup esto es una frase epica \n" + "Otra frase epica";
let lorem2 = `loremp  insup esto es una frase epica 
ahora es otra frase epica`

console.log(lorem);
console.log(lorem2);

//destructuracion 

let person = {  //Esta seria la forma normal de mi objeto
    'name': 'Edward',
    'age': 19,
    'country': 'MX'
}

console.log(person.name, person.age); //forma normal de imprimir

let { name } = person; //esta es la forma destructurada

//Si queremos llamar  lo que compone este objeto utilizamos en ES6:
console.log(name);


//Operador de prolongación: Permite expandir varios elementos. Tenemos varios elementos en arreglos que queremos unir en un solo elemento para presentarlos.

let conjunto1 = ['a', 'b', 'c'];
let conjunto2 = ['x', 'y', 'z'];

let conjunto_union = ['l', 'm', 'n', ...conjunto1, ...conjunto2]
console.log(conjunto_union);

let team1 = ['Edward', 'Julian', 'David'];
let team2 = ['Adonys', 'Difo', 'Luis M'];

//unir diferentes elementos separandolo por equipo y uniendolo en el elemento que yo quiero
let educacion = ['David', ...team1, ...team2];
console.log(educacion);

// Let y const
//Asiganciones mediante let se pueden inicilizar variables  cuyo scope está solo en el bloque de código en el que está llamada, en otras palabras, solo puede existir las variables let dentro de las llaves en que se llaman.
// Var se seguirá usando para variables globales y locales.
{
    var VariableGlobal = "Global";
}

{
    let VairbaleLet = " Global let";
    console.log(VairbaleLet);
}

console.log(VariableGlobal);
//console.log(VairbaleLet); //no se puede acceder tiene que ser desde el bloque de codigo donde se encuentra

//Const, nos permitirá establecer una variable como una constante, donde el valor declarado no podrá cambiar.
const a = "Soy constante";
//a = "No soy constante"; // Al ejecutar arroja error porque no puede cambiarse una constante luego de declararse.

console.log(a);


