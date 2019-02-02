'use strict'

const _ = use('_')

module.exports = (namespace = 'noname') => {
    let config = use(namespace)
    let conf = {
        dsn: _.result(config, 'database.mongodb.dsn', null),
        port: _.result(config, 'server.default.port', 9000)
    }
    const objConfig = Object.assign(conf, config)
    delete objConfig['database']
    return objConfig
}
