'use strict'

const Base = require('./_base.model')

class StoreProductsModel extends Base {
    get collection () {
        return 'store_products'
    }

    get objectid () {
        return null
    }

    get schema () {
        return {
            name: String,
            gender: String,
            slug: String,
            category_id: Number,
            status: {
                ready: Boolean,
                available: Boolean,
                preorder: Boolean
            },
            source: {
                id: this.getMongooseInstance('Schema.Types.ObjectId'),
                type: String
            },
            images: {
                main: String,
                others: Array
            }
        }
    }
}

module.exports = StoreProductsModel
