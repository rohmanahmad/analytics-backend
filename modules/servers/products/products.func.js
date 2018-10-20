module.exports = {
    hello: async (request, response) => {
        response.send('hello from product\'s server')
    },
    
    world: async (request, response) => {
        response.send('world from product\'s server')
    },
    
    main: async (request, response) => {
        response.send('product\'s server running...')
    }
}
