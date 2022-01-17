function filtraPares(arr) {
    function callback(item) {
        return item % 2 === 0;
    }
    return arr.filter(callback)
}

const meuArray = [1, 23, 55, 67, 30, 2, 4];

console.log("Array: ", meuArray)
console.log("Resultado filtrado (pares): ", filtraPares(meuArray))