const fs = require('fs')
const zlib = require('zlib')

const buffer = Buffer.from('흐앙...')
console.log(buffer)
console.log(buffer.length)
console.log(buffer.toString())

const readStream = fs.createReadStream('./readme.md', {highWaterMark: 16})
const data = []

readStream.on('data', (chunk) => {
    data.push(chunk)
    console.log('data: ', chunk, chunk.length)
})

readStream.on('end', ()=>{
    console.log('end: '+Buffer.concat(data).toString())
})

readStream.on('error', (err)=>{
    console.log(err)
})

const writeStream = fs.createWriteStream('./readme2.md.gz')

const zlibStream = zlib.createGzip()
readStream.pipe(zlibStream).pipe(writeStream)