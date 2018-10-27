'use strict'

const {Users} = use('Model.Loader')
const {md5, jwt} = use('Deps.Loader')

module.exports = {
    login: async (request, response, next) => {
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
