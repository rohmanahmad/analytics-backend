'use strict'

let Core = use('Core')
let SwaggerLib = use('Swagger.Lib')
let _ = use('_')

const schemas = use('SwaggerUISchemas.Lib')
let body = use('SwaggerUIBody.Lib')

const credits = {
    'email': 'rohmanmail@gmail.com',
    'phone': '(+62)823-3230-3931'
}

class Documentations extends Core {
    async Main (request, response, next) {
        try {
            response.send('<center><h1 style="margin-top: 100px;">Server Running</h1></center>')
        } catch (err) {
            console.error(err)
            response.status(400)
                .json({
                    status: 400,
                    message: 'Bad Request',
                    error: err.message
                })
        }
    }
    async References (request, response) {
        try {
            const {ref} = request.query
            const splitRef = ref.split('.').map(x => x.trim()).filter(x => x && x.length > 0)
            let result = null
            if (splitRef[0]) {
                if (splitRef[0].toLowerCase() === 'schemas') result = _.result(schemas, `${splitRef[1]}`, {})
                if (splitRef[0].toLowerCase() === 'body') result = _.result(body, `${splitRef[1]}`, {})
            }
            response.json(result)
        } catch (err) {
            console.log(err)
            response.status(400)
                .json({
                    status: 400,
                    message: 'Bad Request',
                    error: err.message
                })
        }
    }
    async AccountsDoc (request, response) {
        try {
            let docs = new SwaggerLib()
                .apiname('Accounts')
                .apiversion('1.0.0')
                .contacts('Phone', credits['phone'])
                .contacts('Email', credits['email'])
                .servers('http://localhost:8002/api/v1', 'API For Accounts')
                .servers('http://localhost:8003/api/v1', 'API For Office')
                .securities({
                    'bearerAuth': {
                        type: 'http',
                        scheme: 'bearer',
                        bearerFormat: 'JWT'
                    }
                })
                .paths('accounts')
                .createAPIDocs()
            response.json(docs)
            docs = null
        } catch (err) {
            console.log(err)
            response.status(400)
                .json({
                    status: 400,
                    message: 'Bad Request',
                    error: err.message
                })
        }
    }
}

module.exports = new Documentations()
