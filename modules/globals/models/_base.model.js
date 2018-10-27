'use strict'

const mongoclient = require('mongodb').MongoClient
const {malangsoftwaregroup} = require('../libs/settings.loader')
const {dbname, dsn} = malangsoftwaregroup

let connectionPool = null

async function reconnectDB () {
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
    constructor () {
        this.collection = this.collection
        this.db = this.dbname
    }

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
        return con.db(dbname).collection(this.collection_name)
    }
    async query () {
        const col = await this.collection()
        return col
    }
}

module.exports = Base
