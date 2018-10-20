'use strict'

const mongoclient = require('mongodb').MongoClient
const config = require('../../../../server.conf')
const database = config.mongodb.malangsoftwaregroup.db_name
const dsn = config.mongodb.malangsoftwaregroup.dsn

let connectionPool = null

async function reconnectDB () {
    // console.log('<-- reconnecting')
    // setTimeout(async function () {
    console.log('-> reconnect')
    try {
        connectionPool = await mongoclient.connect(dsn, {
            // reconnectTries: 3,
            // auto_reconnect: true,
            poolSize: 10,
            useNewUrlParser: true
        })
        // registering events
        connectionPool.on('close', () => {
            console.log('... lost connection')
            reconnectDB()
        })
        connectionPool.on('reconnect', () => { console.log('-> reconnected') })
        console.log('... db connected again')
        return connectionPool
    } catch (e) {
        console.log('reconnecting: ', e.message)
    }
    // }, 100 * 1000)
}

async function connectToDB () {
    try {
        connectionPool = null
        connectionPool = await mongoclient.connect(dsn, {
            // reconnectTries: 3,
            // auto_reconnect: true,
            poolSize: 10,
            useNewUrlParser: true
        })
        // registering events
        connectionPool.on('close', () => {
            console.log('... lost connection')
            reconnectDB()
        })
        connectionPool.on('reconnect', () => { console.log('... reconnected') })
        console.log('[ai_sentiments] db connections are open!')
    } catch (e) {
        console.error(e.message)
    }
}
// connecting to db firstly
connectToDB()

class Base {
    reconnect () {
    }
    async connection () {
        if (!connectionPool) {
            connectionPool = await reconnectDB()
        }
        if (!connectionPool.isConnected()) {
            connectionPool = await reconnectDB()
        }
        return connectionPool
    }
    async collection () {
        const con = await this.connection()
        return con.db(database).collection(this.collection_name)
    }
    async query () {
        const col = await this.collection()
        return col
    }
}

module.exports = Base
