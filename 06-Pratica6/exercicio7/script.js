const numero = window.prompt('Digite um número inteiro' , parseInt(10));
console.log (`Número ${numero}`);

const par = [];
const impar = [];

for (let i = 1; i <= numero; i++) {
    if (i % 2 === 0) {
        par.push(i);
    } else {
        impar.push(i);
    }
}

console.log(`Numeros pares`, par);
console.log(`Numeros pares`, impar);