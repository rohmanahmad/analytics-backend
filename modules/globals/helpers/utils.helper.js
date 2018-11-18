'use strict'

const Env = useStatic('Env')
const debug = use('debug')
const moment = use('moment')
const util = use('util')
const isDebug = Env.DEBUG_LOG === 'yes'
const d = isDebug ? 'debug' : 'app'
const dodebug = debug(d)

const logDateTime = function () {
    return moment().format('Y/MMM/DD HH:mm:SS')
}

const debugme = (data = '') => {
    if (isDebug) {
        log(data)
    }
}
const log = (data) => {
    if (typeof data === 'string') {
        const p = `[${logDateTime()}] : ${data}`
        dodebug(p)
    } else {
        const p = `[${logDateTime()}] :`
        data = util.inspect(data, {showHidden: false, depth: null})
        dodebug(p)
        dodebug(data)
    }
}

module.exports = {
    debugme,
    log
}
