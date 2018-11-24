'use strict'

const mongoose = use('mongoose')
const mongooseObjID = useStatic('mongooseObjID')
const {mongodb} = use('Settings.Loader')
const {dsn} = mongodb
const utils = use('Utils.Helper')

class Base {
    constructor () {
        this.connection()
    }
    get options () {
        return {
            useNewUrlParser: true,
            keepAlive: true,
            autoIndex: true,
            poolSize: 4
        }
    }

    connection () {
        utils.debugme(`connect to: ${dsn}`)
        mongoose.connect(dsn, this.options)
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
