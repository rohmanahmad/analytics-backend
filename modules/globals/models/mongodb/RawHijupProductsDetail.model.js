'use strict'

const Base = require('./_base.model')

class RawHijupProductsDetailModel extends Base {
    get collection () {
        return 'raw_hijup_products_detail'
    }

    get objectid () {
        return null
    }

    get schema () {
        return {
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
            prices: {},
            vendor: {},
            currency: String,
            __typename: String,
            description: String,
            material: String,
            care: String,
            note: String,
            measurement_attributes: Array,
            random_order: Number,
            payment_note: String,
            shipping_note: String,
            variants: Array,
            category: {},
            seo: {}
        }
    }
}

module.exports = RawHijupProductsDetailModel
