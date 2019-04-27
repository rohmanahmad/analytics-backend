'use strict'

const Base = require('./_base.model')

class StoreProductVariantsModel extends Base {
    get collection () {
        return 'store_product_variants'
    }

    get objectid () {
        return null
    }

    get schema () {
        return {
            id: String,
            product_id: String,
            items: Array,
            status: {}
        }
    }
}

module.exports = StoreProductVariantsModel
