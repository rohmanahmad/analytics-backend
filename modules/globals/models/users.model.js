'use strict'

const Base = require('./_base.model')

class UsersModel extends Base {
    constructor () {
        this.dsn = dsn
        this.connection = null
        this.db_collection = null
        this.connection_state = false
        this.collection_name = 'user_accounts'
    }
    query () {
        return new Promise ((resolve, reject) => {
            if (!this.connection) {
                mongoclient.connect(this.dsn, {poolSize: 10, useNewUrlParser: true }, (e, con) => {
                    if (e) return reject(e)
                    this.connection = con
                    this.connection_state = true
                    this.db_collection = con.db(database).collection(this.collection_name)
                    resolve(this)
                }) 
            } else {
                resolve(this)
            }
        })
    }
}

module.exports = UsersModel