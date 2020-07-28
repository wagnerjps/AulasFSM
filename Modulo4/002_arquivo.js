/*
// Forma comum de se importar
const fs = require('./002_fs-promise')
const myReadFile = fs.myReadFile
const myWriteFile = fs.myWriteFile
*/
// Forma com destructuring assignment 
const { myReadFile, myWriteFile } = require('./002_fs-promise')

const { resolve } = require('path')
let file = '001_correcao.js'
let newFileName = file.substr(0, file.length-3) + '_copy' + file.substr(file.length-3, 3)
/**
// callback hell
fs.readFile(file, (err, data) => {
    fs.writeFile(newFileName, data, (err) => {
        console.log('Arquivo copiado!')
    })
})
 */
// promises async/await

// Trecho exportado para 002_fs-promise.js

/**
myReadFile(file)
    .then( data => myWriteFile(newFileName, data))
    .then( () => console.log('Arquivo copiado!'))
    .catch( err => console.log(err))
 */

 // Async/Await
 const myCopyFile = async() => {
    console.log('Ola async/await...')
     try {
        const data = await myReadFile(file)
        await myWriteFile(newFileName, data)
        console.log('Arquivo lido e escrito!')
     }catch(err){
         console.log('Erro: ', err)
     }
 }

 myCopyFile().then( () => console.log('Fim do async/await.'))