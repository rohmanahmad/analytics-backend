const {Express, Cors, BodyParser, Http, Compression} = use('Deps.Loader')
const app = Express()
const server = Http.createServer(app);
const utils = use('Utils.Helper')
const HttpListener = use('Http.Listener')
const ValidateInput = use('ValidateInput.Middleware')

const {port} = require('./users.conf')
const Routes = require('./users.routes')

HttpListener.registerListener(server)

const prefix = '/api/users'

// enable compression
app.use(Compression())
// enable cors in all routes
app.use(Cors())
// parse various different custom JSON types as JSON
app.use(BodyParser.json({ type: 'application/*+json' }))

// parse some custom thing into a Buffer
app.use(BodyParser.raw({ type: 'application/vnd.custom-type' }))

// parse an HTML body into a string
app.use(BodyParser.text({ type: 'text/html' }))

// registering user's routers
Routes.register(app, prefix)

module.exports = {
    start: function (newport) {
        newport = newport || port
        server.listen(newport)
        utils.log('users server listen on port: ' + newport)
    }
}
