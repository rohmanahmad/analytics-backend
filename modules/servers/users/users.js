const app = require('express')();
const cors = require('cors')
const bodyParser = require('body-parser')
const server = require('http').createServer(app);
const {port} = require('./users.conf')
const routes = require('./users.routes')
const HttpListener = require('../../globals/listener/http')
const ValidateInput = require('../../globals/middlewares/ValidateInput.middleware')

HttpListener.registerListener(server)

const prefix = '/api/users'

// enable cors in all routes
app.use(cors())
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))


server.listen(port);
