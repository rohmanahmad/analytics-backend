'use strict'

const Base = require('./_base.model')

class Patterns extends Base {
    get collection () {
        return 'sentiment_patterns'
    }

    get objectid () {
        return ['_id']
    }

    get schema () {
        return {
            'pattern': String,
            'sentiments_indexes': Array
        }
    }
}

module.exports = new Patterns().model()
