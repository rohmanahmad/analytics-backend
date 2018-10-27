'use strict'

const Base = require('./Base')

class VocabularyModel extends Base {
    constructor () {
        super()
        this.collection_name = 'ml_vocabulary'
    }
}

module.exports = VocabularyModel
