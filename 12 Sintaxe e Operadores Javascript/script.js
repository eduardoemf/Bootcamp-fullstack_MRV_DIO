function desafio_comparativo(num1, num2) {
    let numero1 = Number(num1)
    let numero2 = Number(num2)
    let soma = numero1 + numero2

    // verificando os resultados possíveis quando as variáveis comparadas forem iguais
    switch (numero1 === numero2) {
        case true:
            let validacao_igualdade_inicio_texto = `Os números ${numero1} e ${numero2} são iguais.`
            if (soma < 10) {
                console.log(`${validacao_igualdade_inicio_texto} Sua soma é ${soma}, que é menor que 10 e menor que 20`);
            } else if (soma >=10 && soma < 20) {
                console.log(`${validacao_igualdade_inicio_texto} Sua soma é ${soma}, que é maior ou igual a 10 e menor que 20`);
            } else if (soma >= 20) {
                console.log(`${validacao_igualdade_inicio_texto} Sua soma é ${soma}, que é maior ou igual a 10 e maior ou igual a 20`);
            }
            break;
        case false:
            let validacao_desigualdade_inicio_texto = `Os números ${numero1} e ${numero2} não são iguais.`
            if (soma < 10) {
                console.log(`${validacao_desigualdade_inicio_texto} Sua soma é ${soma}, que é menor que 10 e menor que 20`);
            } else if (soma >=10 && soma < 20) {
                console.log(`${validacao_desigualdade_inicio_texto} Sua soma é ${soma}, que é maior ou igual a 10 e menor que 20`);
            } else if (soma >= 20) {
                console.log(`${validacao_desigualdade_inicio_texto} Sua soma é ${soma}, que é maior ou igual a 10 e maior ou igual a 20`);
            }
            break;
        }
    }


desafio_comparativo(12,7);