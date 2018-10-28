'use strict'

const Base = require('./_base.model')

class Patterns extends Base {
    get collection () {
        return 'ml_sentence_patterns'
    }
}

module.exports = new Patterns()
