// import * as host from './promise'
const host = require('./promise')
const {} = require('querystring')
console.log(host)

exports === module.exports
global.console.log('')

setImmediate(()=>{
    console.log('즉시 실행')
})

process.nextTick(()=>{
    console.log('nextTick')
})

setTimeout(()=>{
    console.log('timeout')
}, 0)

Promise.resolve().then(()=>{
    console.log('promise')
})

let url = new URL("http://www.etoland.co.kr/")
console.log(url)