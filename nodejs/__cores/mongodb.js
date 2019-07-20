'use strict'

// const _ = require('lodash')
let mongoose = require('mongoose')
let dbSettings = require('../configs/Databases')

let mongo = dbSettings.filter(x => x.driver === 'mongodb')
let modelMap = require('../configs/ModelMapDB')

const options = {
    useNewUrlParser: true,
    keepAlive: true,
    autoIndex: true,
    poolSize: 4
}

let connect = function (url) {
    return new Promise((resolve, reject) => {
        if (!url) return reject(new Error('Invalid NAME or URL'))
        let con = mongoose.createConnection(url, options)
        resolve(con)
    })
}

let connections = function () {
    let c = {}
    for (let x of mongo) {
        if (x.name && x.dsn) {
            c[x.name] = connect(x.dsn)
        }
    }
    return c
}

let models = function () {
    const c = connections()
    let m = {}
    for (let i of modelMap) {
        m[i.collection] = c[i.server]
    }
    return m
}

let mongos = {
    connections: connections(),
    models: models()
}

module.exports = function (type) {
    return mongos[type] || null
}
