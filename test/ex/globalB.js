const A = require('./globalA')

console.time(`START`)
global.message = '아 시바'
console.timeEnd(`START`)

const obj = {
    outside: {
        insied: {
            key: 'value'
        }
    }
}
console.dir(obj, {colors: true, depth: 2})

console.log(message)