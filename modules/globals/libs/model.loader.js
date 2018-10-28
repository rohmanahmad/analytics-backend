'use strict'

const Logs = require('../models/logs.model')
const Patterns = require('../models/patterns.model')
const Users = require('../models/users.model')
const Vocabularies = require('../models/vocabularies.model')
const LoginLogs = require('../models/login_logs.model')

module.exports = {
    Logs,
    LoginLogs,
    Patterns,
    Users,
    Vocabularies
}
