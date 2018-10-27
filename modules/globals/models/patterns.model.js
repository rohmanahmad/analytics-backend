'use strict'

const Base = require('./_base.model')

class SpatternModel extends Base {
    static get collection () {
        return 'ml_sentence_patterns'
    }
}

module.exports = SpatternModel