'use strict'

const {mongodb} = use('Deps.Loader')
const utils = use('Utils.Helper')

const mongoclient = mongodb.MongoClient
const {mongodb_conf} = use('Settings.Loader')
const {dbname, dsn} = mongodb_conf

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
            utils.debugme('... lost connection')
            reconnectDB()
        })
        connectionPool.on('reconnect', () => { utils.debugme('-> reconnected') })
        utils.debugme('... db connected again')
        return connectionPool
    } catch (e) {
        utils.debugme('reconnecting: ', e.message)
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
            utils.debugme('... lost connection')
            reconnectDB()
        })
        connectionPool.on('reconnect', () => { utils.debugme('... reconnected') })
        utils.debugme('db connections are open!')
    } catch (e) {
        console.error(e.message)
    }
}
// connecting to db firstly
connectToDB()

class Base {
    constructor () {
        this.collection = this.collection
        this.db = dbname
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
