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
            id: String,
            name: String,
            gender: String,
            slug: String,
            category_id: String,
            status: {
                trash: Boolean,
                suspend: Boolean,
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
            },
            brand: String,
            favorites: {
                count: Number,
                by: Array
            },
            stars: {
                count: Number
            }
        }
    }
}

module.exports = StoreProductsModel
