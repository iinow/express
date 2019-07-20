'use strict'

const { Sequelize } = require('sequelize')
const json = require('./data.json')

/**
 * @param define.timestamps default value = true, true 이면 createdAt, updatedAt 값이 생긴다.
 */
let instance

class SequelizeHandler {
    constructor() {
        if(instance){
            instance = new SequelizeHandler()
        }
        this.sequel = new Sequelize({
            database: json.database,
            username: json.user,
            password: json.password,
            host: json.options.host,
            dialect: json.options.dialect,
            timezone: json.options.timezone,
            define: json.options.define,
            pool: json.options.pool,
            port: json.options.port,
        })
        
        instance = this
    }
}
module.exports = new SequelizeHandler()