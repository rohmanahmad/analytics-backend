'use strict'

const Base = require('./_base.model')

class Genders extends Base {
    get collection () {
        return 'genderize_genders'
    }

    get objectid () {
        return ['_id']
    }

    get schema () {
        return {
            'name': String,
            'evaluate': {
                'male': Number,
                'female': Number,
                'none': Number
            },
            'gender': String,
            'created_at': Date,
            'updated_at': Date
        }
    }
}

module.exports = Genders
