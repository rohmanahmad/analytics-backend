'use strict'

const Env = useStatic('Env')
const md5 = use('md5')
const jwt = use('jwt')
const moment = use('moment')
const _ = use('_')

const Models = use('Models')

const Users = new Models().model('Users.Model')
const LoginLogs = new Models().model('LoginLogs.Model')

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
        const config = _.result(request.configs, 'documentation', '')
        response.json(docs.publish(config))
    },
    login: async (request, response, next) => {
        try {
            const {
                user_email: userEmail,
                user_password: userPassword
            } = request.validInput
            const criteria = {
                'user_email': userEmail || '',
                'user_password': md5(userPassword || '')
            }
            const user = await Users.findOne(criteria)
            let resp = {
                'status': 400,
                'message': 'email or password doesn\'t match'
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
                            // yg disimpan di redis ini, bukan token asli krn panjang
                            token_id: 'login_' + md5(newToken),
                            expires_in: new Date(expiredDate)
                        }
                    }
                }
                await LoginLogs.create({
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
