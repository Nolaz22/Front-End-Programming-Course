const numero = window.prompt('Digite um número inteiro' , parseInt(10));
console.log (`Tabuada de ${numero}`);
for ( let i = 1; i <= 10; i++) {
    for ( let j = 1; j <= 10; j++) {
        const resultado = i * numero;
        console.log (`${i} x ${numero} = ${resultado}`);
    }
}