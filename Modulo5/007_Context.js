// context == this

const obj = {
    var1: 10,
    get: function () {
        return this.var1
    }
}
console.log(obj.get())
console.log(obj.get.bind({var1: 20 })()) //Com o bind posso manipular o atributo nesta passagem (não recomendado)
console.log(obj.get())