// HOF

// Uma simples HOF
function teste(acao){
    acao()
}
teste(() => console.log('opa'))

// Comuns Manjadas
// MAP
const valores = [1,2,3,4, 5]
const dobro = valores.map(valor => valor * 2)
console.log(dobro)

const printNew = valores.map(valor => {
    return {
        valor: valor,
        dobro: valor * 2
    }
})
console.log(printNew)

// FOREACH
valores.forEach(valor => console.log(valor))

// REDUCE
const soma1 = valores.reduce((prev, curr) => prev +curr, 0)
console.log(soma1)

// Compondo com HOF
const soma2 = valores
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((prev, curr) => prev +curr, 0)

console.log(soma2)

const somar = (num1, num2) => num1 + num2
const dobro2 = valor => valor * 2
const impares = valor => valor % 2 === 0

const soma3 = valores
    .filter( impares )
    .map( dobro2 )
    .reduce( somar , 0)

console.log(soma3)