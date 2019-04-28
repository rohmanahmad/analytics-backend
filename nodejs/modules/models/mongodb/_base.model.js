'use strict'

const _ = use('_')
const mongoose = use('mongoose')
const utils = use('Utils.Helper')
const ModelMapping = use('model_mapping')
const DBSettings = use('databases_conf')

class Base {
    get options () {
        return {
            useNewUrlParser: true,
            keepAlive: true,
            autoIndex: true,
            poolSize: 4
        }
    }

    getMongooseInstance (key = '') {
        return _.result(mongoose, key)
    }

    connect () {
        const dsn = this.getDsn()
        if (dsn) {
            return this.connection(dsn)
        } else {
            throw new Error('no DSN found')
        }
    }

    getDsn () {
        const currentCollection = this.collection || ''
        const serverConllection = ModelMapping[currentCollection] || ''
        const dsn = _.result(DBSettings, `${serverConllection}.dsn`, '')
        // console.log(currentCollection, serverConllection)
        return dsn
    }

    connection (dsn) {
        utils.debugme(`connect to: ${dsn}`)
        const con = mongoose.createConnection(dsn, this.options)
        return con
    }

    getSchema () {
        let myschema = this.schema
        if (this.objectid) {
            for (let x of this.objectid) {
                myschema[x] = MongoID
            }
        }
        return myschema
    }

    model () {
        this.ObjectID = MongoID
        const connect = this.connect()
        const myschema = this.getSchema()
        const schema = new mongoose.Schema(myschema)
        return connect.model(this.collection, schema)
    }
}

module.exports = Base
