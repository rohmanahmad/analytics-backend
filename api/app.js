'use strict'

const server = 'Accounts'

const Server = require('./Cores/Server')
const config = require('./Application/Servers/' + server)

Server.init(config)