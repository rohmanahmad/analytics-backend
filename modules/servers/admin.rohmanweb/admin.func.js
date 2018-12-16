'use strict'

const docs = use('modules/globals/static/documentation/admin.docs')
const md5 = use('md5')
const Env = useStatic('Env')

const login = async (request, response) => {
    const {user_email: email, user_password: password} = request.body
    if (email === Env.ADMIN_EMAIL &&
        password === Env.ADMIN_PASSWORD) {
        response.send({
            'status': 200,
            'message': 'Success',
            'data': {
                token: md5('myauthtoken')
            }
        })
    } else {
        response
            .status(400)
            .json({
                status: 400,
                message: 'wrong email and password'
            })
    }
}

const loginPage = async (request, response) => {
    response.render('admin.rohmanwebid/index', {})
}

module.exports = {
    main: async (request, response) => {
        response.render('admin.rohmanwebid/index', {isLogin: 1})
    },
    docs: async (request, response) => {
        response.render('docs/index', docs.publish())
    },
    apidocs: async (request, response) => {
        response.json(docs.publish())
    },
    login,
    loginPage
}
