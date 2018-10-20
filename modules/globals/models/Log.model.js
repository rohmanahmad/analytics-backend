const mongoclient = require('mongodb').MongoClient
const config = require('../../../server.conf')
const database = config.mongodb.malangsoftwaregroup.db_name
const dsn = config.mongodb.malangsoftwaregroup.dsn

class LogModel {
    constructor () {
        this.dsn = dsn
        this.connection = null
        this.db_collection = null
        this.connection_state = false
        this.collection_name = 'request_logs'
    }
    query () {
        return new Promise ((resolve, reject) => {
            if (this.connection) this.connection.close()
            mongoclient.connect(this.dsn, {poolSize: 10, useNewUrlParser: true }, (e, con) => {
                if (e) return reject(e)
                this.connection = con
                this.connection_state = true
                this.db_collection = con.db(database).collection(this.collection_name)
                resolve(this)
            }) 
        })
    }
}

module.exports = LogModel