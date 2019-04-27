'use strict'

const Base = require('./_base.model')

class StoreCategoriesModel extends Base {
    get collection () {
        return 'store_categories'
    }

    get objectid () {
        return null
    }

    get schema () {
        return {
            id: String,
            name: String,
            icon: String,
            order: Number,
            parent_id: String,
            show_at_menu: Boolean,
            slug: String,
            source: {
                id: String,
                type: String
            }
        }
    }
}

module.exports = StoreCategoriesModel
