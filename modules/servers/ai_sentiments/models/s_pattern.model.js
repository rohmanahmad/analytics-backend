'use strict'

const Base = require('./Base')

class SpatternModel extends Base {
    constructor () {
        super()
        this.collection_name = 'ml_sentence_patterns'
    }
}

module.exports = SpatternModel