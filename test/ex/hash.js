const crypto = require('crypto')

const password = "qlalfqjsghe1241d"

console.log(`base64: ${crypto.createHash('sha512').update(password).digest('base64')}`)
console.log(`hex: ${crypto.createHash('sha512').update(password).digest('hex')}`)
console.log(`latin1: ${crypto.createHash('sha512').update(password).digest('latin1')}`)

const cipher = crypto.createCipher('aes-192-gcm', 'key')
let result = cipher.update(password, 'utf8', 'base64')
result += cipher.final('base64')
console.log('암호화: '+result)

const decipher = crypto.createDecipher('aes-192-gcm', 'key')
let result2 = decipher.update(result, 'base64', 'utf8')
result2 += decipher.final('utf8')
console.log('복호화: '+result2)