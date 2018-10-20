const mongodb = require('mongodb').MongoClient
const dbName = 'malangsoftwaregroup'
const dsn = `mongodb://development:mlg123@94.237.66.156:27017/${dbName}?authSource=${dbName}`
const _ = require('lodash')
const p = require('optimist').argv;

const query = async function (c) {
    try {
        if (this.client) this.client.close()
        if (this.db) this.db = null
        if (this[c]) this[c] = null
        this.client = await mongodb.connect(dsn, { useNewUrlParser: true })
        this.db = client.db(dbName)
        this.model = await db.collection(c)
        return this
    } catch (e) {
        console.log(e)
    }
}

const kalimat = p.s || 'saya senang bertemu dengan anda'
console.log(kalimat)

query('ml_vocabulary').then(async function (r) {
    const arrKalimat = kalimat.split(' ').map(x => x.trim())
    const data = await r.model.find({'indo': {$in: arrKalimat}}).toArray()
    const mapping = arrKalimat.map(x => {
        let obj = _.find(data, {'indo': x}) || {}
        obj.original_keyword = x
        return obj
    })
    const res = mapping.map(x => ({k: x.original_keyword, t: x.type}))
    const identifiedPattern = res.map(x => x.t).filter(x => (x ? (x.trim().length > 0) : false)).toString().replace(/\,/g, '+')
    const sentencePatterns = await query('ml_sentence_patterns')
    const p = await sentencePatterns.model.findOne({'pattern': identifiedPattern})
    const sentimentWords = p && p.data && p.data.sentiment_word && p.data.sentiment_word.indexes ? p.data.sentiment_word.indexes : []
    console.log(p)
    for (let o of sentimentWords) {
        const index = o.i
        res[index]['sentiment'] = o
    }
    console.log({res, identifiedPattern: identifiedPattern.trim(), p, sentimentWords})
    process.exit(0)
})