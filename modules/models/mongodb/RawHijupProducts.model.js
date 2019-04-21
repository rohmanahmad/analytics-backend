'use strict'

const Base = require('./_base.model')

class RawHijupProductsModel extends Base {
    get collection () {
        return 'raw_hijup_products'
    }

    get objectid () {
        return null
    }

    get schema () {
        return {
            category: Object,
            image: Object,
            variants: Array,
            average_rating: Number,
            total_reviewer: Number,
            total_bookmarks: Number,
            id: Number,
            name: String,
            url: String,
            created_at: Date,
            updated_at: Date,
            hijup_point: Number,
            label: String,
            discount_percent: String,
            is_preorder: Boolean,
            is_ready: Boolean,
            is_available: Boolean,
            is_try_first: Boolean,
            is_voucher_applicable: Boolean,
            gender: String,
            prices: Object,
            vendor: Object,
            currency: String,
            __typename: String,
            last_recrawl: {}
        }
    }
}

module.exports = RawHijupProductsModel
