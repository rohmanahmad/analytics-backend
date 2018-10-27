'use strict'

const basePath = process.env.PWD
require('dotenv').config({path: `${basePath}/.env`})
const Env = process.env
const md5 = require('md5')

module.exports = {
    basePath,
    Env,
    md5
}
