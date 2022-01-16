// Solução 1 exemplo da aula
function verificar_palindromo_1(palavra) {
    if (!palavra) return "string inexistente";

    return palavra.split("").reverse().join("") === palavra;
}

// Solução 2 exemplo da aula

function verificar_palindromo_2(palavra) {
    if (!palavra) return "string inexistente";

    for (let i = 0; i < palavra.length / 2; i++) {
        if (palavra[i] !== palavra[palavra.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(verificar_palindromo_2("Bianca"));