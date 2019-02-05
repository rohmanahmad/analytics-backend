'use strict'

const Base = require('./_base.model')

class RawHijupCategoriesModel extends Base {
    get collection () {
        return 'raw_hijup_categories'
    }

    get objectid () {
        return null
    }

    get schema () {
        return {
            id: Number,
            name: String,
            icon: String,
            order: Number,
            parent_id: Number,
            show_at_menu: Boolean,
            slug: String,
            __typename: String
        }
    }
}

module.exports = RawHijupCategoriesModel
