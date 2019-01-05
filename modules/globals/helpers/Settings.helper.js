'use strict'

const _ = use('_')

module.exports = (namespace) => {
    const config = use(namespace)
    return {
        dsn: _.result(config, 'database.mongodb.dsn', null),
        port: _.result(config, 'server.default.port', 9000)
    }
}
