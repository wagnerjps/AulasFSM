// Pure function ---> Funções muito simples
// Ela só depende apenas das entradas dela e de mais nada externo
const somar = (num1, num2) => num1 + num2
console.log(somar(100, 2))

const somar2 = (num1, num2) => {
    if(num1 > num2){
        return num1 - num2
    }else if(num2 > num1){
        return num2 - num1
    }
    return 'Iguais'
}

console.log(somar2(10, 10))

const media = (num1, num2) => {
    const soma = somar2(num1, num2)
    console.log(soma)
    if(typeof soma === 'string') {
        return 'Não numérico'
    }
    return soma/2

}

console.log(media(12, 2))
