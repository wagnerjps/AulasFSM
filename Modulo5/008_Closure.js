// Closure == Se lembrar de onde veio, isolando o valor no seu escopo

function func(initial){
    let contador = initial

    return function(){
        contador++
        return contador
    }
}
const func1 = func(10)
console.log(func1(), func1())

const func2 = func(20)
console.log(func2(), func2())
console.log(func1(), func2())

// Isso não funciona pois não esta visivel, o retorno é uma function
console.log(func1().contador)


function animal(name){
    //Atributo restrito ao escopo atual
    let count = 0
    
    //Interface publica
    return {
        getCount: function(){
            return count
        },
        increment: function(){
            count++
        },
        getName: function(){
            return name
        }
    }
}

const gato = animal('gato')
gato.increment()
console.log(gato.getCount(), gato.getName())
gato.increment()
console.log(gato.getCount(), gato.getName())

const cachorro = animal('cachorro')
cachorro.increment()
console.log(cachorro.getCount(), cachorro.getName())