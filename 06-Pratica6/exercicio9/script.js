const idade = prompt(`Digite 10 idades separadas por virgulas`, `40,2,5,25,33,18,52,21,67,7`);
const idades = idade.split(`,`);
console.log(`Idades`, idades);

let total = 0;
for (let i=0; i<idades.length; i++) {
    const value = parseInt(idades[i]);
    if (value>=18) {
        total ++;
    }
}

console.log('Maiores de idade', total);