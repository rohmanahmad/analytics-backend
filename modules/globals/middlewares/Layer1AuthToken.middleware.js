'use strict'

const basepath = process.env.INIT_CWD
const pathJoin = require('path').join
const config = require(pathJoin(basepath, 'config'))
let UsersModel = require(pathJoin(basepath, config.models.user_accounts))

async function getUsers (token) {

}

async function validateToken (token) {

}

module.exports = {
    auth: async (request, response, next) => {
        console.log('authentication')
        let authToken = request.header('Authorization')
        authToken = authToken && typeof authToken === 'string' ? authToken.replace('Bearer').trim() : null
        if (!authToken) {
            authToken = request.query.access_token || null
        }
        if (!authToken) {
            response.status(402)
            response.send({status: 402, 'message': 'UnAuthorized Request'})
        } else {
            await validateToken(authToken)
            return next()
        }
    }
}
