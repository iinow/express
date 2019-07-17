let mysql = require('mysql')
let connection = mysql.createConnection({
    host: '192.168.167.15',
    password: 'qlalfqjsghekd',
    user: 'root',
    database: 'test',
    port: 3307
})
require('~/')
// connection.connect()
// let qry = connection.query({
//     sql: 'SELECT * FROM board'
// }, (err, result, fields) => {
    
// })

module.exports = connection