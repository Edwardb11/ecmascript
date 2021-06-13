
// Parameters in Objects

let name = 'Oscar';
let age = 32;

const obj = {
    name: name,
    age: age
};
console.log('Before ES6 -> ', obj);

// es6
const objES6 = { name, age };
console.log(`After ES6 -> `, objES6);

//Normal sin Arrow
/*
const names = [
    { name: 'Oscar', age: 19 },
    { name: 'Yesica', age: 27 }
]; */


// Arrow Functions
const names = [
    { name, age },
    { name: 'Yesica', age: 27 }
];

let listOfNames = names.map(function (item) {
    console.log('Before ES6 -> ', item.name);
});

// es6
let listOfNamesES6 = names.map(item => console.log(`After ES6 -> ${item.name}`));


//promesas
const helloPromise = foo => {
    return new Promise((resolve, reject) => {
        if (foo) {
            resolve('Hey!');
        } else {
            reject('Upss!');
        }
    });
};

const foo = true;
helloPromise(foo)
    .then(response => console.log('response -> ', response))
    .then(() => console.log('message -> Hello World!'))
    .catch(error => console.log('error -> ', error));