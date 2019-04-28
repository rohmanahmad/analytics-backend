'use strict'

// require('make-promises-safe')
require('./filemapper')
require('./__cores/core')
const Env = process.env
const apiList = Env.APIS.split(',')
const serverPath = './servers/'

for (let i of apiList) {
    require(`${serverPath}${i}`).start()
}
