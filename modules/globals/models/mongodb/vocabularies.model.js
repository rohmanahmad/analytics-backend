'use strict'

const Base = require('./_base.model')

class VocabularyModel extends Base {
    get collection () {
        return 'sentiment_vocabularies'
    }

    get objectid () {
        return null
    }

    get schema () {
        return {
            'type': String,
            'id_keyword': String,
            'en_keyword': String,
            'sentiment': Number,
            'description': String
        }
    }
}

module.exports = VocabularyModel
