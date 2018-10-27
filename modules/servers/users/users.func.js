'use strict'

const {Users} = useIt('modules/globals/libs/model.loader')
const {md5, jwt} = useIt('modules/globals/libs/deps.loader')
const serverconfig = require('../../../server.conf')
const jwtExp = serverconfig.jwt.exp
const jwtToken = serverconfig.jwt.app_token

function log (msg) {
    const format = `${new Date()} :`
    if (typeof msg === 'object') {
        console.log(format)
        console.log(msg)
    } else {
        console.log(format, msg)
    }
}

module.exports = {
    login: async (request, response, next) => {
        log('login')
        try {
            const userEmail = request.all.user_email
            const userPassword = md5(request.all.user_password)
            const o = await new Users().query()
            const users = await o.db_collection.findOne({'user_email': userEmail, 'user_password': userPassword})
            let resp = {
                'status': 401,
                'message': 'email or password doesn\'t match',
                'data': {
                    'items': null
                }
            }
            if (users) {
                const newToken = jwt.sign({'data': users.user_email}, jwtToken, {'expiresIn': jwtExp})
                resp = {
                    'status': 200,
                    'message': 'login success',
                    'data': {
                        'items': {
                            email: users.user_email,
                            token: newToken
                        }
                    }
                }
            }
            response.send(resp.status || 400, resp)
        } catch (e) {
            next(e)
        }
    },
    
    main: async (request, response) => {
        response.send('user\'s server running...')
    }
}
