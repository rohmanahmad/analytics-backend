'use strict'

const Base = require('./_base.model')

class NameList extends Base {
    get collection () {
        return 'genderize_name_list'
    }

    get objectid () {
        return ['_id']
    }

    get schema () {
        return {
            'name': String,
            'gender': String,
            'created_at': Date,
            'updated_at': Date
        }
    }
}

module.exports = NameList
