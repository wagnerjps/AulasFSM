/** Exercícios extras (Aula 01):
Os exercícios aqui propostos visam reforçar a prática da linguagem javascript de acordo com o que foi visto na primeira aula extra.

1) Dado um vetor de números, como poderia ser realizada a soma de todos os valores utilizando reduce.
*/
const vetor = [1, 2, 3, 4, 5]
const somatorio = vetor.reduce((acum, atual) => acum + atual, 0)
console.log('Somar vetor: ', somatorio)

/**
2) Dado um vetor de números, como poderia ser realizada a soma de todos os valores pares utilizando reduce e filter.
 */

const pares = vetor.filter(item => item % 2 === 0)
const somarPares = pares.reduce((acum, atual) => acum + atual, 0)
console.log('Somar pares: ', somarPares)

/**
 3) Dado um vetor de números, como poderia ser realizada a soma de todos os valores ímpares utilizando reduce e filter.
 */
const impares = vetor.filter(item => item % 2 !== 0)
const somarImpares = impares.reduce((acum, atual) => acum + atual, 0)
console.log('Somar impares: ', somarImpares)

/**
 4) Dado um vetor de valores, retorne um objeto com quantas vezes cada valor está presente no vetor (dica: utilize reduce)
 */
const vetor2 = [1, 2, 1, 3, 3, 4, 5, 5, 5]
const howManyTimes = (agg, val) => {
    if (!agg[val]) {
        agg[val] = 0
    }
    agg[val] = agg[val] + 1
    return agg
}
const times = vetor2.reduce(howManyTimes, {})
console.log('Quantas vezes repete: ', times)

/**
 5) Dado um vetor de valores, retorne um vetor com somente os valores únicos do vetor (aqueles que ocorrem apenas 1 vez dentro do vetor) (Dica 1: utilize reduce, filter e keys, Dica 2: escreva console.log(objeto.keys()) e veja como ele poderá te ajudar neste exercício)
 */

const vetor3 = [1, 2, 2, 3, 4, 5, 5, 'tulio', 'tulio', 'devpleno']
const howManyTimes2 = (agg, val) => {
    if (!agg[val]) {
        agg[val] = {
            value: val,
            occur: 0
        }
    }
    agg[val].occur = agg[val].occur + 1
    return agg
}
const contagem = vetor3.reduce(howManyTimes2, {})
const keys = Object.keys(contagem)
const unique = keys.filter(key => contagem[key].occur === 1)
const uniqueValues = unique.map(val => contagem[val].value)
console.log('Quais não se repete: ', uniqueValues)

/**
6) Dado um vetor com números, retorne somente os números pares;
    e
7) Dado um vetor com números, retorne somente os números ímpares;
*/

const vetor4 = [1, 2, 1, 3, 3, 4, 5, 5, 5]
const somentePares = vetor.filter(item => item % 2 === 0)
const somenteImpares = vetor.filter(item => item % 2 !== 0)

console.log('Somente pares: ', somentePares)
console.log('Somente impares: ', somenteImpares)

/**
 8) Uma função é chamada da seguinte forma:

calculadora(10, '+', 20)

crie o corpo da função de forma que ela realize as 4 operações aritméticas
 */

const calculadora = (a, op, b) => {
    if (op === '+')
        return a + b
    if (op === '-')
        return a - b
    if (op === '*')
        return a * b
    if (op === '/')
        return a / b
}
const a = 4
const b = 4

console.log('Calculadora +: ', calculadora(a, '+', b))
console.log('Calculadora -: ', calculadora(a, '-', b))
console.log('Calculadora *: ', calculadora(a, '*', b))
console.log('Calculadora /: ', calculadora(a, '/', b))

/**
9) Modifique a calculadora do exercício anterior para que ela receba 2 números e uma função, e realize o cálculo. Exemplo:

const soma = (num1, num2) => num1+num2

const calculadoraFn = (....) => ….

calculadoraFn(10, soma, 20)
 */

const soma = (a, b) => a + b
const subt = (a, b) => a - b
const mult = (a, b) => a * b
const divi = (a, b) => a / b

const calculadora2 = function(a, op, b){
    return op(a, b)
}

console.log('Calculadora soma: ', calculadora2(a, soma, b))
console.log('Calculadora subt: ', calculadora2(a, subt, b))
console.log('Calculadora mult: ', calculadora2(a, mult, b))
console.log('Calculadora divi: ', calculadora2(a, divi, b))