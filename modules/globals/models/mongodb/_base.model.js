'use strict'

const mongoose = use('mongoose')
const mongooseObjID = useStatic('mongooseObjID')
const {mongodb, connections} = use('Settings.Loader')
const {dsn} = mongodb
const utils = use('Utils.Helper')
const _ = use('_')

class Base {
    constructor (custServer = null) { // custServer = 'server1'
        if (custServer) {
            this.connection(custServer)
        } else {
            this.connection()
        }
    }
    get options () {
        return {
            useNewUrlParser: true,
            keepAlive: true,
            autoIndex: true,
            poolSize: 4
        }
    }

    connection (cust) {
        const currentDsn = cust ? _.result(connections, `${cust}.dsn`) : dsn
        utils.debugme(`connect to: ${currentDsn}`)
        mongoose.connect(currentDsn, this.options)
    }

    getSchema () {
        let myschema = this.schema
        if (this.objectid) {
            for (let x of this.objectid) {
                myschema[x] = mongooseObjID
            }
        }
        return myschema
    }

    model () {
        const myschema = this.getSchema()
        const schema = new mongoose.Schema(myschema)
        return mongoose.model(this.collection, schema)
    }
}

module.exports = Base
