'use strict'

const Alphabeth = 'aAbBcCdDeEfFgGhHiIjJkKLmMnNopPqQrRsStTuUvVwWxXyYzZ'
const Numeric = '123456789'
const chars = Numeric + Alphabeth

module.exports = {
    get: function (length = 6) {
        let text = ''
        for (let i = 0; i < length; i++) {
            text += chars.charAt(Math.floor(Math.random() * chars.length))
        }
        return text
    }
}
