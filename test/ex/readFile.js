const fs = require('fs')

fs.readFile('./readme.md', (err, data) => {
    if(err){
        console.log(err)
    }
    console.log(data)
    console.log(data.toString())
})

fs.writeFile('./helloworld.txt', '테스트다 이놈들아!', (err) => {
    err ? console.log(err) : undefined

    fs.readFile('./helloworld.txt', (err, data) => {
        if(err){
            throw err
        }

        console.log(data.toString())
    })
})