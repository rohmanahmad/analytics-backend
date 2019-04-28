'use strict'

const morgan = require('morgan')
const fs = require('fs')
const path = require('path')

const Env = process.env

let logFile = fs.createWriteStream(path.join(Env.LOG_FILES, `${Env.APIS}.log`), { flags: 'a' })

module.exports = function (msg) {
    morgan('combined', { stream: accessLogStream })
}