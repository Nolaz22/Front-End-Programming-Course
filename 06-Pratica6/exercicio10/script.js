const input = prompt(`Digite um numero inteiro`,parseInt(`7`));

let result = '';
for(let i=1;i<=input;i++) {
    for(let j=1;j<=input;j++) {
        result += '*';
    }
    result += '\n';
}

console.log(result)