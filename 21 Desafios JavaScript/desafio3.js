//let lines = prompt().split('\n')
//let N = parseInt(lines.shift());

let lines = prompt("Digite um número inteiro entre 1 e 1000: ").split('\n')
let N = parseInt(lines.shift());

for (let i = 1; i <= N; i++) { // Enquanto a variável auxiliar "i" for menor ou igual a N (número digitado como limitador da verificação), incremente mais 1 ao "i"
    if (i % 2 !== 0) {    // Se a divisão entre "i" e 2 tiver resto diferente de 0
        console.log(i); // "imprima" na tela o número que passou na validação IF
    }
}