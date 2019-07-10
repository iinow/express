const winston = require('winston')
require('winston-daily-rotate-file')
require('date-utils')
const { timestamp, combine, printf } = winston.format
// Date.prototype.toFormat()

const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]: ${message}`;    // log 출력 포맷 정의
})

const logger = winston.createLogger({
    level: 'debug',
    transports: [
        new winston.transports.File({
            filename: 'log/system.log',
            zippedArchive: true,
            format: combine(
                timestamp(),
                myFormat
            )
            // format: winston.format.printf(
            //     info => `${new Date()} [${info.level.toUpperCase()}] - ${info.message}`
            // )
        }),
        new winston.transports.Console({
            format: combine(
                timestamp(),
                myFormat
            )
            // format: winston.format.printf(
            //     info => `${new Date()} [${info.level.toUpperCase()}] - ${info.message}`
            // )
        })
    ]
})

module.exports = logger