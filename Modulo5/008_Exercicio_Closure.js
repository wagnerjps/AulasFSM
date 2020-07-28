// 01)
function test() {
    console.log(a)          // 'Undefined' a esta no mesmo escopo, porem abaixo da sua chamada
    console.log(foo())      // '2' retorna pois o retorno de foo() esta fixado como 2 
   
    var a = 1
    function foo() {
       return 2
    }
 }
 
 test()

// 02)
var a = 1; 

function someFunction(number) {
  function otherFunction(input) {
    return a
  }
  
  a = 5
  
  return otherFunction;
}

var firstResult = someFunction(9)
var result = firstResult(2)

console.log(firstResult())           // '5' pois a função otherFunction retorna o valor de a que esta no escopo pai como 5
console.log(result)                  // '5' pois chama a função anterior, que chama otherFunction que tem a com valor fixo no scopo pai


// 3)
var fullname = 'Tulio Faria'
var obj = {
   fullname: 'Jose Silva',
   prop: {
      fullname: 'Nome Sobrenome',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname())  //'Nome Sobrenome' pois o retorno da funação esta travada dentro do escopo com this

var test = obj.prop.getFullname

console.log(test())   // 'Undefined' pois fullname de prop existe apenas no seu escopo

console.log(test.bind(obj.prop)()) //Assim funcionária com o escopo interno do getFulname()

console.log(test.bind(obj)()) //Assim funcionária com o escopo externo do getFulname()

// 4)

var a = 1
function b() { 
    a = 10
    return; 
    function a() {} 
} 
b() //Modifica apenas dentro desta execução                
console.log(a)      // '1' pois apenas variável a esta sendo chamada no console.log()