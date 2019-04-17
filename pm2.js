'use strict'

require('dotenv').config()
const pm2 = require('pm2')
const path = require('path')
const opt = require('optimist')
const rootFolder = __dirname
const acePath = path.join(rootFolder, 'service.js')

const {name, args} = opt.argv

const data = {
    name,
    script: acePath,
    args,
    kill_timeout: 3000,
    autorestart: false
}
if (!args) {
    console.log('invalid arguments!')
    console.log('ex: node pm2.js --name "" --args "command --arg1 --arg2 ..."')
    process.exit(2)
}
console.log(data)
pm2.connect(function (err) {
    if (err) {
        console.log(err)
        return false
    }
    pm2.start(data, function (err, app) {
        console.log('start pm2')
        pm2.disconnect()
        if (err) {
            console.error(err)
            return false
        } else if (app) {
            console.info({
                'pm_id': app[0].pm2_env.pm_id || 0,
                'pid': app[0].pid || 0
            })
        } else {
            console.error('nothing responses or errors')
        }
    })
})
