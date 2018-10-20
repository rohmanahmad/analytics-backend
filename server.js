require('dotenv').config({path: './.env'})
const APIS = process.env.APIS.split(',')

for (let x of APIS) {
    require(`./modules/servers/${x}`)
}
