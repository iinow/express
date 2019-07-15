const http = require('http')
const fs = require('fs')
const url = require('url')
const qs = require('querystring')

const parseCookies = (cookie = '') => 
    cookie
        .split(';')
        .map(v => v.split('='))
        .map(([k, ...vs]) => [k, vs.join('=')])
        .reduce((acc, [k, v]) => {
            acc[k.trim()] = decodeURIComponent(v)
            return acc
        }, {})

const session = {}

http.createServer((req, res) => {
    const cookies = parseCookies(req.headers.cookie)
    if(req.url.startsWith('/login')){
        const { query } = url.parse(req.url)
        const { name } = qs.parse(query)
        const expires = new Date()
        const randomInt = +new Date()
        session[randomInt] = {
            name,
            expires
        }
        expires.setMinutes(expires.getMinutes() + 5)
        res.writeHead(302, {
            Location: '/',
            // 'Set-Cookie': `name=${encodeURIComponent(name)};Expires=${expires.toDateString()}; httpOnly; Path=/`
            'Set-Cookie': `session=${randomInt};Expires=${expires.toDateString()}; httpOnly; Path=/`
        })

        res.end()
    }else if(cookies.session && session[cookies.session].expires > new Date()/* cookies.name*/){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'})
        // res.end(`${cookies.name}님 안녕하세요`)
        res.end(`${session[cookies.session].name}님 안녕하세요`)
    }else{
        fs.readFile(`${__dirname}/cookie2.html`, (err, data) => {
            if(err){
                throw err
            }
            res.end(data)
        })
    }
}).listen(80, ()=>{
    console.log(`80번 대긱중...`)
})