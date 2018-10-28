'use strict'

const {Users, LoginLogs} = use('Models.Loader')
const {Env, md5, jwt, moment} = use('Deps.Loader')
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
            const userEmail = request.validInput.user_email
            const userPassword = md5(request.validInput.user_password)
            const o = await Users.query()
            const user = await o.findOne({
                'user_email': userEmail,
                'user_password': userPassword
            })
            let resp = {
                'status': 401,
                'message': 'email or password doesn\'t match',
            }
            if (user) {
                const newToken = jwt.sign({
                    'data': userEmail
                },
                AppKey,
                {'expiresIn': TokenExp})
                const expiredDate = moment()
                    .add(TokenExp)
                    .toDate()
                    .getTime()
                resp = {
                    'status': 200,
                    'message': 'Login Success',
                    'data': {
                        'items': {
                            email: userEmail,
                            token: newToken,
                            token_id: 'login_' + md5(newToken), // yg disimpan di redis ini, bukan token asli krn panjang
                            expires_in: new Date(expiredDate)
                        }
                    }
                }
                const l = await LoginLogs.query()
                await l.insert({
                    user_id: user._id,
                    login_at: new Date(),
                    ip_address: request.ip,
                    user_agent: request.get('User-Agent')
                })
            }
            response.status(resp.status || 400).send(resp)
        } catch (e) {
            next(e)
        }
    },
    register: async (request, response, next) => {
    },
    reset: async (request, response, next) => {
    }
}
