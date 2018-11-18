'use strict'

const cluster = require('cluster')
if (cluster.isMaster) {
    const cpuCount = require('os').cpus().length;

    // Create a worker for each CPU
    for (let i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }
} else {
    require('make-promises-safe')
    require('./filemapper')

    const Env = useStatic('Env')
    const optimist = use('optimist')
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
            require(`${serverPath}${server}`)
                .cluster(cluster.worker)
                .start(port)
        }
    } else {
        for (let x of apiList) {
            const server = x.trim()
            // start using config port default
            require(`${serverPath}${server}`)
                .cluster(cluster.worker)
                .start()
        }
    }
}

cluster.on('exit', function (worker) {
    // Replace the dead worker,
    // we're not sentimental
    console.log('Worker %d died :(', worker.id)
    cluster.fork()
})
