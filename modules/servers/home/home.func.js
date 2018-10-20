module.exports = {
    hello: async (request, response) => {
        response.send('hello from main\'s server')
    },
    
    world: async (request, response) => {
        response.send('world from main\'s server')
    },
    
    main: async (request, response) => {
        response.send('main\'s server running...')
    },
    
    notFound: async (request, response) => {
        response.send({status: 404, message: 'route not found'})
    }
}
