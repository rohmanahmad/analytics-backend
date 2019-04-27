'use strict'

const Base = require('./_base.model')

class StoreProductBrandsModel extends Base {
    get collection () {
        return 'store_product_brands'
    }

    get objectid () {
        return null
    }

    get schema () {
        return {
            id: String,
            name: String,
            source: {
                id: Number
            }
        }
    }
}

module.exports = StoreProductBrandsModel
