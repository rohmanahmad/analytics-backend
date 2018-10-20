'use strict'

const fs = require('fs')
const _ = require('lodash')
const async = require('async')
const mongo = require('mongodb').MongoClient
const dbName = 'malangsoftwaregroup'
const dsn = `mongodb://development:mlg123@94.237.66.156:27017/${dbName}?authSource=${dbName}`

let connection = async () => {
    let c = await mongo.connect(dsn, { useNewUrlParser: true })
    let d = c.db(dbName)
    return {c, d}
}

const adjFilepath = '/Users/rohmanahmad/Downloads/machineLearning/adj.txt'
const getAdj = async () => {
    const adj = fs.readFileSync(adjFilepath, 'utf8')
    let arrAdj = adj.split(':').map(x => x.split(',').map(o => o.trim()))
    arrAdj = _.uniq(arrAdj)
    arrAdj = _.map(arrAdj, x => ({'indo': (x[0] || ''), 'type': 'ADJ', 'description': 'kata sifat', 'en': (x[1] || '')}))
    return arrAdj
}

const verbFilepath = '/Users/rohmanahmad/Downloads/machineLearning/verb.txt'
const getVerb = async () => {
    const adj = fs.readFileSync(verbFilepath, 'utf8')
    let arrAdj = adj.split(',').map(x => x.trim())
    arrAdj = _.uniq(arrAdj)
    arrAdj = _.map(arrAdj, x => ({'indo': x, 'type': 'V', 'description': 'kata kerja'}))
    return arrAdj
}

const conjFilepath = '/Users/rohmanahmad/Downloads/machineLearning/conjunction.txt'
const getConj = async () => {
    const adj = fs.readFileSync(conjFilepath, 'utf8')
    let arrAdj = adj.split(',').map(x => x.trim())
    arrAdj = _.uniq(arrAdj)
    arrAdj = _.map(arrAdj, x => ({'indo': x, 'type': 'C', 'description': 'Conjunction/ kata hubung'}))
    return arrAdj
}

const nounFilepath = '/Users/rohmanahmad/Downloads/machineLearning/noun.txt'
const getNoun = async () => {
    const noun = fs.readFileSync(nounFilepath, 'utf8')
    let arrNoun = noun.split(':').map(x => x.trim().split(',').map(x => x.trim()))
    arrNoun = _.uniq(arrNoun, x => x[0])
    arrNoun = _.map(arrNoun, x => ({'indo': x[0], 'type': 'N', 'description': 'Noun/ kata benda', 'en': x[1] ? x[1] : ''}))
    return arrNoun
}

const pnounFilepath = '/Users/rohmanahmad/Downloads/machineLearning/pronoun.txt'
const getPnoun = async () => {
    const pnoun = fs.readFileSync(pnounFilepath, 'utf8')
    let arrpNoun = pnoun.split(':').map(x => x.trim().split(',').map(x => x.trim()))
    arrpNoun = _.uniq(arrpNoun, x => x[0])
    arrpNoun = _.map(arrpNoun, x => ({'indo': x[0], 'type': 'PN', 'description': 'Pronoun/ kata ganti orang', 'en': x[1] ? x[1] : ''}))
    return arrpNoun
}
const vocCollection = 'ml_vocabulary'

const runBulkOps = async (data) => {
    try {
        const {c, d} = await connection()
        const vocabulary = d.collection(vocCollection)
        let bulk = vocabulary.initializeUnorderedBulkOp()
        for (let x of data) {
            bulk.find({'indo': x.indo}).upsert().replaceOne(x)
        }
        bulk.execute()
        c.close()
    } catch (e) {
        throw e
    }
}

const runExport = async () => {
    try {
        // const adj = await getAdj()
        // const verb = await getVerb()
        // const conj = await getConj()
        // const noun = await getNoun()
        const pnoun = await getPnoun()
        // const all = adj.concat(verb)//.concat(conj)
        await runBulkOps(pnoun)
        // process.exit(0)
    } catch (e) {
        console.log(e)
    }
}

runExport()