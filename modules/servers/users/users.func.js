'use strict'

const {Users} = use('Model.Loader')
const {Env, md5, jwt} = use('Deps.Loader')
const docs = use('modules/globals/static/documentation/users.docs')
const AppKey = Env.API_KEY
const TokenExp = Env.TOKEN_EXP

module.exports = {
    main: async (request, response) => {
        response.send('user\'s server running...')
    },
    docs: async (request, response) => {
        response.render('docs/index', docs.publish())
    },
    apidocs: async (request, response) => {
        response.json(docs.publish())
    },
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
                const newToken = jwt.sign({'data': users.user_email}, AppKey, {'expiresIn': TokenExp})
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
    }
}
