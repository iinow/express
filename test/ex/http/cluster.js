const cluster = require('cluster')
const http = require('http')
const numCPUs = require('os').cpus().length

if(cluster.isMaster){
    console.log(`마스터 프로세스 아이디: ${process.pid}`)
    for(let i = 0; i < numCPUs; i++){
        cluster.fork()
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`${worker.process.pid}번 워커가 종료되었습니다.`)
        cluster.fork()
    })
}else {
    http.createServer((req, res)=>{
        res.write('<h1>Hello world</h1>')
        res.end('<p>Hello Node!!!</p>')
    }).listen(8085)

    setTimeout(()=>{
        process.exit()
    }, 1000)
    console.log(`${process.pid}번 워커 실행`)
}

const Runner = (abc) => {
    return abc * 10
}

