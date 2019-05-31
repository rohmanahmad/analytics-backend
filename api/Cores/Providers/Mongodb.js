'use strict'

const mongoose = require('mongoose')
const {mongodb} = use('Configs/Databases')

class Mongodb {
    constructor (connType = '') {
        try {
            if (typeof mongodb[connType] !== 'object') throw new Error(`Invalid DB Config on ${connType}`)
            if (typeof mongodb[connType]['DSN'] !== 'string') throw new Error(`Invalid DB Config on DSN`)
            this.dsn = mongodb[connType]['DSN']
            this.connection = null
            this.schema = null
            this.classObject = null
            // this.__connection() // do connect to db first time
        } catch (err) {
            throw err
        }
    }

    async __connection () {
        try {
            if (!this.connection) {
                this.connection = await mongoose.connect(this.dsn, {useNewUrlParser: true});
            }
        } catch (err) {
            throw err
        }
    }

    setSchema (schema) {
        try {
            if (typeof schema !== 'object') throw new Error('Invalid Schema')
            this.schema = new mongoose.Schema(schema)
            return this
        } catch (err) {
            throw err
        }
    }

    bindClass (classObject) {
        // class
        if (typeof classObject === 'function') this.classObject = classObject
        return this
    }

    async model (collection = '') {
        try {
            let model = null
            if (!this.connection) await this.__connection()
            if (this.connection && typeof this.connection.model === 'function') {
                if (this.classObject) this.schema.loadClass(this.classObject)
                model = this.connection.model(collection, this.schema, collection.toLowerCase())
            }
            return model
        } catch (err) {
            throw err
        }
    }
}

module.exports = Mongodb
