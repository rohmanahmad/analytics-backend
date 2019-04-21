'use strict'

const Base = require('./_base.model')

class StorePromotionsModel extends Base {
    get collection () {
        return 'store_promotions'
    }

    get objectid () {
        return null
    }

    get schema () {
        return {
            id: String,
            name: String,
            faq: {
                // syarat,
                // semua yg berhubungan dengan ketentuan, syarat ataupun lainnya
            },
            valid_until: Date()
        }
    }
}

module.exports = StorePromotionsModel
