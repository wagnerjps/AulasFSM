console.log(1)
setTimeout(() => {
    console.log('Ola em 2 segundos...')
}, 3000)
console.log(2)

let count1 = 0
let interval1 = setInterval(() => {
    console.log('Ola 1')
    count1++
    if(count1 > 5){
        clearInterval(interval1)
    }
}, 1000)

let count2 = 0
let interval2 = setInterval(() => {
    console.log('Ola 2')
    count2++
    if(count2 > 10){
        clearInterval(interval2)
    }
}, 1000)


console.log(3)