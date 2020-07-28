// Funções normais
const falar = function(palavra){
    console.log(palavra)
}
falar('Olá')

const somar = function(num1, num2){
    return num1 + num2
}
console.log(somar(1, 2))

// Uma arrow function
const somar2 = (num1, num2) => num1 + num2
console.log(somar(1, 2))

// Consegue chamar uma função em outra função
const medialouca = (soma, num) => {
    soma++
    num++
    return soma/num
} 
console.log(medialouca(somar2(8, 2), 5))

// Consegue injetar comportamento (função anonima)
const animal = (nome, grunido) => nome + ' ' + grunido()
console.log(animal('cachorro', () => 'latir'))

