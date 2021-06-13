/**
 * Spread Operator
 */
const obj = {
    name: 'Oscar',
    age: 32,
    country: 'MX'
};

let { name, ...addInfo } = obj;
console.log(`nombre: ${name}`);
console.log(`Informacion adicional: `, addInfo);

let { country, ...nameAndAge } = obj;
console.log(`nombre y edad: `, nameAndAge);

/**
 * Porpagation Properties
 */
const person = {
    name: 'Oscar',
    age: 32
};

const personInformation = {
    ...person,
    country: 'MX'
};
console.log(`Informacion de personas: `, personInformation);

/**
 * Promise Finally
 */
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        true
            ? setTimeout(() => {
                resolve('Hello World!');
            }, 3000)
            : reject(new Error('Test Error'));
    });
};

helloWorld()
    .then(result => console.log('resultadp -> ', result))
    .catch(err => console.log('err -> ', err))
    .finally(() => console.log('finalizó'));


/**
 * Regex
 */
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2021-06-05');
const year = match[1];
const month = match[2];
const day = match[3];
console.log('Date -> ', year, month, day);