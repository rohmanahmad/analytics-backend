'use strict'

const Base = require('./_base.model')

class StoreProductPricesModel extends Base {
    get collection () {
        return 'store_product_prices'
    }

    get objectid () {
        return null
    }

    get schema () {
        return {
            id: String,
            product_id: String,
            source: {},
            price: Number,
            discount: {
                // type: String, // percent or nominal
                // value: Number
            },
            status: {
                // trash: Boolean,
                // pending: Boolean
            }
        }
    }
}

module.exports = StoreProductPricesModel
