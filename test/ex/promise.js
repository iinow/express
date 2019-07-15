let condition = true

const promise = new Promise((resolve, reject) => {
    if(condition){
        resolve(`성공임`)
    }else{
        reject(`실패임`)
    }
})

promise.then((msg) => {
    console.log(msg)
}).catch((err)=> {
    console.log(err)
})

const host = 'Hello world??'
const port = '293'
module.exports = {
    'host': host, 
    'port': port
}
