'use strict'

const _ = use('_')

const Models = use('Models')

const Vocabularies = new Models().model('Vocabularies.Model')
const ObjectId = useStatic('ObjectId')
const docs = use('modules/globals/static/documentation/sentiments.docs')
const Sentences = use('SentencesLib')

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

module.exports = {
    main: async (request, response) => {
        response.send('sentiment\'s server running...')
    },
    docs: async (request, response) => {
        response.render('docs/index', docs.publish())
    },
    apidocs: async (request, response) => {
        const config = _.result(request.configs, 'documentation', '')
        response.json(docs.publish(config))
    },
    vocabList: async (request, response, next) => {
        try {
            const {limit, page, sort} = request.validInput
            const total = await Vocabularies.find().countDocuments()
            let paggination = pagginate(total, limit, page)
            let v = Vocabularies.find()
            if (sort === 'desc') v = v.sort({$natural: -1})
            v = v.limit(parseInt(limit || 10))
            v = v.skip(parseInt(paggination.skip))
            v = await v
            paggination.current_count = v.length
            response.apiCollection(v, paggination)
        } catch (e) {
            next(e)
        }
    },
    vocabOne: async (request, response, next) => {
        try {
            const _id = new ObjectId(request.params.id)
            const q = await Vocabularies.findOne({_id})
            response.apiCollection(q, {})
        } catch (e) {
            next(e)
        }
    },
    vocabNew: async (request, response, next) => {
        try {
            const {
                type,
                indo_key: idKey,
                en_key: enKey,
                sentiment,
                description
            } = request.validInput
            let data = {}
            data['type'] = type
            data['id_key'] = idKey || ''
            data['en_key'] = enKey || ''
            data['sentiment'] = sentiment || ''
            data['description'] = description || ''
            const q = await Vocabularies.create(data)
            response.apiCollection(q, {data})
        } catch (e) {
            next(e)
        }
    },
    vocabUpdate: async (request, response, next) => {
        try {
            const defaultDesc = request.config.default_vocab_desc
            const action = request.all.action
            if (action !== 'delete' && action !== 'update') throw new Error('action not valid!')
            const items = request.all.items
            if (items && items.length === 0) throw new Error('items not valid')
            let bulkOps = await Vocabularies.query().initializeUnorderedBulkOp({ w: 1 })
            for (let x of items) {
                let data = x.data
                const type = data.type.split('|')[0].trim()
                data['type'] = type
                data['indo_keyword'] = data.indo_keyword || ''
                data['en_keyword'] = data.en_keyword || ''
                data['description'] = data.description || defaultDesc[type]
                bulkOps.updateOne({ '_id': new ObjectId(x.id) }, { '$set': x.data }, { '$upsert': true })
            }
            bulkOps = await bulkOps.execute()
            response.apiCollection(bulkOps, {})
        } catch (e) {
            next(e)
        }
    },
    vocabDelete: async (request, response, next) => {
        try {
            response.apiCollection({})
        } catch (e) {
            next(e)
        }
    },
    vocabGetFromSentences: async (request, response, next) => {
        try {
            const { sentence } = request.validInput
            const s = new Sentences(sentence)
            const data = await s.process()
            response.apiCollection(data)
        } catch (e) {
            next(e)
        }
    },
    viewWordList: async (request, response) => {
        response.render('sentiments/index', {
            active_view: 'wordlist',
            title: 'word list',
            token: 'my-token'
        })
    }
}
