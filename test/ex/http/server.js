const http = require('http')
const https = require('https')

const server = http.createServer((req, res) => {
    res.write('<h1>Hello world!!!!!!?</h1>')
    res.end('<p>Hello Server!</p>')
})

server.listen(8080)

server.on('listening', ()=>{
    console.log('8080포트 대기 중')
})

server.on('connection', ()=>{
    console.log('8080포트 접근했다')
})

server.on('error', (error)=>{
    console.log('서버 애러 발생: '+error)
})

server.on('close', ()=>{
    console.log('서버 닫힘')
})

// https.createServer()