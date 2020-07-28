const qtdVetor = [1, 2, 3, 4, 1, 1, 2, 5, 6, 7, 7, 7, 7]
const quantasVezes = (agr, val) => {
    if(!agr[val]){
        agr[val] = 0
    }

    agr[val] = agr[val] + 1

    return agr
}
const qtdVezes = qtdVetor.reduce(quantasVezes, {})
//console.log(qtdVezes)

const vezesRepete = (agr, val) => {
    if(!agr[val]){
        agr[val] = {
            value: val,
            occur: 0
        }
    }

    agr[val].occur = agr[val].occur + 1

    return agr
}

const vRepete = qtdVetor.reduce(vezesRepete, {})
const keys = Object.keys(qtdVetor.reduce(vezesRepete, {}))
const nRepete = keys.filter(key => vRepete[key].occur === 1)
const uniValues = nRepete.map(val => vRepete[val].value)
console.log(uniValues)