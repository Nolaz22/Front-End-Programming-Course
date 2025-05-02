const idade = prompt(`Digite 5 idades separadas por virgulas`, `10,2,5,25,33`);
const idades = idade.split(`,`);
console.log(`Idades`, idades);

let total = 0;
for (let i=0; i<idades.length; i++) {
    total += parseInt(idades[i]);
}
console.log(total);

const media = total / idades.length;
console.log(`Media`, media);