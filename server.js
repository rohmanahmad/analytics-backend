const {Env} = require('./modules/globals/libs/deps.loader')
const apiList = Env.APIS.split(',')
/* eslint-enable */
for (let x of apiList) {
    const server = x.trim()
    require(`./modules/servers/${server}`)
}
