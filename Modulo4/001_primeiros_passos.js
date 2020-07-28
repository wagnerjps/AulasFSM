//Javascript

// c-like

const valor = 10
if (valor === 10){
    console.log('Valor se igual a 10: ', valor)
}


let valor2 = 20
valor2 = 30
//Não pode
//valor = 30

const objeto = {
    chave: 'valor: ' + valor,
    chave2: 'valor2' + valor2
}

console.log('Objeto: ', objeto)

const soma = function(a, b) {
    return a + b
}

console.log('Função soma: ', soma(2, 4))

const calculadora = function(op, a, b){
    return op(a, b)
}

console.log('Função calculadora usando função soma: ', calculadora(soma, 2, 4))

// Vetor
const vetor = [1, 2, 3, 4, 5]
const dobrado = vetor.map(function(item){
    return { original: item, dobrado: item * 2 }
})
console.log('Valor dobrado com map: ', dobrado)


// Arrow Function
const somentePares = item => item % 2 === 0
const dobrar = item => item * 2

const paresDobrados = vetor.filter(somentePares).map(dobrar)
console.log('Pares dobrados: ', paresDobrados)

const somar = (acumulado, atual) => acumulado + atual
const somatorio = paresDobrados.reduce(somar, 0)

console.log('Somatório: ', somatorio)