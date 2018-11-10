'use strict'

const basePath = process.env.PWD
require('dotenv').config({path: `${basePath}/.env`})

const _ = require('lodash')
const BodyParser = require('body-parser')
const Compression = require('compression')
const Cors = require('cors')
const debug = require('debug')
const Env = process.env
const Express = require('express')
const Http = require('http')
const jwt = require('jsonwebtoken')
const md5 = require('md5')
const mongod = require('mongodb')
const mongoose = require('mongoose')
const moment = require('moment')
const optimist = require('optimist')
const path = require('path')
const util = require('util')

const ObjectId = mongod.ObjectId
const mongooseObjID = mongoose.Schema.Types.ObjectId

module.exports = {
    _,
    basePath,
    BodyParser,
    Compression,
    Cors,
    debug,
    Env,
    Express,
    Http,
    jwt,
    md5,
    mongod,
    moment,
    mongoose,
    mongooseObjID,
    optimist,
    ObjectId,
    path,
    util
}
