// Formas de declaração de variáveis
var var1 = 10
let let1 = 3
const const1 = {
    value: 10
}

const1.value = 30

console.log(var1)
console.log(let1)
console.log(const1.value)

// Tipos de Variáveis
let a = 20                  //Inteiro
a = 1.0                     //Real/Decimal
let name = 'Wagner'         //String pode ser usar aspas simples ou duplas
let obj = {                 //Objeto
    nome: 'Wagner',
    dados: {
        idade: 37,
        id: 5
    }
}
let c = obj.dados.idade     //Objeto - De forma fireta
console.log(c)

let key = 'nome'            //Desta forma direta - De forma por chaves
let d = obj[key]
key = 'dados'               
let e = obj[key]     
console.log(d)
console.log(e)

let  vetor = [1, 2, 3]      //Vetor
console.log(vetor[0])

let funcao = function() {   //Atribuir uma função a variável
    console.log('De dentro da função')
}
let funcaoCopia = funcao    // Posso atribuir a variável função a uma nova variável
funcaoCopia()

let funcaoParam = function(func) {          //Atribuir uma função a uma variável passando uma função como parametro
    func('De dentro da função com paramentro função')
}
let funcaoComoParam = funcaoParam
funcaoComoParam(console.log)
