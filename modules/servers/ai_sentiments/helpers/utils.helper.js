'use strict'

module.exports = {
    log: (msg) => {
        const format = `${new Date()} :`
        if (typeof msg === 'object') {
            console.log(format)
            console.log(msg)
        } else {
            console.log(format, msg)
        }
    }
}
