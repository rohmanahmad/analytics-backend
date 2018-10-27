'use strict'

const Base = require('./_base.model')

class VocabularyModel extends Base {
    static get collection () {
        return 'ml_vocabulary'
    }
}

module.exports = VocabularyModel
