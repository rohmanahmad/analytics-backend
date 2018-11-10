'use strict'

const Logs = require('../models/mongodb/logs.model')
const Patterns = require('../models/mongodb/patterns.model')
const Users = require('../models/mongodb/users.model')
const Vocabularies = require('../models/mongodb/vocabularies.model')
const LoginLogs = require('../models/mongodb/login_logs.model')
const ShortLink = require('../models/mongodb/short_link.model')

module.exports = {
    Logs,
    LoginLogs,
    Patterns,
    ShortLink,
    Users,
    Vocabularies
}
