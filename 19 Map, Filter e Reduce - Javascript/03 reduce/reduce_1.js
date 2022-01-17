function somaNumeros(array) {
    return array.reduce(function(previosValue, currentValue) {
        console.log({previosValue})
        console.log({currentValue})
        return previosValue + currentValue;
    })
}

const arr = [1, 2, 7, 11];

console.log(somaNumeros(arr));