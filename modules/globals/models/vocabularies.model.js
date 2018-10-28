'use strict'

const Base = require('./_base.model')

class VocabularyModel extends Base {
    get collection () {
        return 'ml_vocabulary'
    }
}

module.exports = new VocabularyModel()
