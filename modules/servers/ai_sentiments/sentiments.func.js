'use strict'

const serverconfig = require('../../../server.conf')
const Mpattern = require('./models/s_pattern.model')
const Mvoc = require('./models/s_vocabulary.model')
const ObjectID = require('bson/lib/bson/objectid')

const sPatternModel = new Mpattern()
const vocabModel = new Mvoc()

function pagginate (dataCount, limit, page) {
    const pageCount = Math.floor(dataCount / limit)
    const skip = (page * limit) || 0
    page = page === 0 ? 1 : page
    return {
        total: dataCount,
        page_count: pageCount,
        current_count: 0,
        limit,
        page,
        skip
    }
}

class Sentiments {
    async vocabListAll (request, response, next) {
        try {
            const limit = request.all.limit || 10
            const page = request.all.page
            const sort = request.all.sort
            const q = await vocabModel.query()
            const total = await q.find().count()
            let paggination = pagginate(total, limit, page)
            let v = q.find({})
            v = v.limit(limit)
            v = v.skip(paggination.skip)
            if (sort === 'desc') v = v.sort({$natural: -1})
            v = await v.toArray()
            paggination.current_count = v.length
            response.r.apiCollection(v, paggination)
        } catch (e) {
            next(e)
        }
    }

    async vocabListOne (request, response, next) {
        try {
            const _id = new ObjectID(request.params.id)
            const q = await vocabModel.query().findOne({_id})
            response.r.apiCollection(q, {})
        } catch (e) {
            next(e)
        }
    }

    async createOne (request, response, next) {
        try {
            const defaultDesc = request.config.default_vocab_desc
            const type = request.all.type.split('|')[0].trim()
            if (request.config.accepted_vocab_type.indexOf(type) < 0) {
                throw new Error('type not accepted!')
            }
            let data = request.all
            data['type'] = type
            data['indo_keyword'] = data.indo_keyword || ''
            data['en_keyword'] = data.en_keyword || ''
            data['description'] = data.description || defaultDesc[type]
            const q = await vocabModel.query().insertOne(data)
            response.r.apiCollection(q, {data})
        } catch (e) {
            next(e)
        }
    }

    async vocabUpdateOrDelete (request, response, next) {
        try {
            const defaultDesc = request.config.default_vocab_desc
            const action = request.all.action
            if (action !== 'delete' && action !== 'update') throw new Error('action not valid!')
            const items = request.all.items
            if (items && items.length === 0) throw new Error('items not valid')
            let bulkOps = await vocabModel.query().initializeUnorderedBulkOp({ w: 1 })
            for (let x of items) {
                let data = x.data
                const type = data.type.split('|')[0].trim()
                data['type'] = type
                data['indo_keyword'] = data.indo_keyword || ''
                data['en_keyword'] = data.en_keyword || ''
                data['description'] = data.description || defaultDesc[type]
                bulkOps.updateOne({ '_id': new ObjectID(x.id) }, { '$set': x.data }, { '$upsert': true })
            }
            bulkOps = await bulkOps.execute()
            response.r.apiCollection(bulkOps, {})
        } catch (e) {
            next(e)
        }
    }
}

module.exports = Sentiments
