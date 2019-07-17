'use strict'

const { Sequelize } = require('sequelize')
const json = require('./data.json')

class SequelizeHandler {
    constructor() {
        this.oauth2 = new Sequelize({
            database: json.database,
            username: json.user,
            password: json.password,
            host: json.options.host,
            dialect: json.options.dialect,
            timezone: json.options.timezone,
            define: json.options.define,
            pool: json.options.pool,
            port: json.options.port
        })
    }
}

module.exports = new SequelizeHandler()