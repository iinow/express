const winston = require('winston')
require('winston-daily-rotate-file')
require('date-utils')

const logger = winston.createLogger({
    level: 'debug',
    transports: [
        new winston.transports.File({
            filename: 'log/system.log',
            zippedArchive: true,
            format: winston.format.printf(
                info => `${new Date()} [${info.level.toUpperCase()}] - ${info.message}`
            )
        }),
        new winston.transports.Console({
            format: winston.format.printf(
                info => `${new Date()} [${info.level.toUpperCase()}] - ${info.message}`
            )
        })
    ]
})

module.exports = logger