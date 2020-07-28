const fs = require('fs')

const myReadFile = path => new Promise((resolve, reject) =>{
    fs.readFile(path, (err, data) => {
        if(err){
            reject(err)
        }else{
            resolve(data)
        }
    })
})

const myWriteFile = (path, data) => new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
        if(err){
            reject(err)
        }else{
            resolve()
        }
    })
})

module.exports = { myReadFile, myWriteFile }