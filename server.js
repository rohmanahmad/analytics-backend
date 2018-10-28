'use strict'

require('make-promises-safe')
require('./filemapper')

const {Env, optimist} = use('Deps.Loader')
const apiList = Env.APIS.split(',')
const serverPath = './modules/servers/'

// ex: node server.js --servers="home:4000,users:5000"
const {servers} = optimist.argv
if (servers) {
    const s = servers
        .split(',')
        .map(x => x.trim())
        .filter(x => x.length > 0)
        .map(x => x.split(':').map(x => x.trim()))
    for (let x of s) {
        const server = x[0].trim()
        const port = parseInt(x[1])
        require(`${serverPath}${server}`).start(port)
    }
} else {
    for (let x of apiList) {
        const server = x.trim()
        // start using config port default
        require(`${serverPath}${server}`).start()
    }
}
