'use strict'

const basePath = process.env.PWD
require('dotenv').config({path: `${basePath}/.env`})

const BodyParser = require('body-parser')
const Compression = require('compression')
const Cors = require('cors')
const debug = require('debug')
const Env = process.env
const Express = require('express')
const Http = require('http')
const md5 = require('md5')
const mongodb = require('mongodb')
const moment = require('moment')
const optimist = require('optimist')
const path = require('path')

const ObjectId = mongodb.ObjectId

module.exports = {
    basePath,
    BodyParser,
    Compression,
    Cors,
    debug,
    Env,
    Express,
    Http,
    md5,
    mongodb,
    moment,
    optimist,
    ObjectId,
    path
}
