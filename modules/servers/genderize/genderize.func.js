'use strict'

const _ = use('_')

const Models = use('Models')

const Genders = new Models().model('Genders.Model')
const NameList = new Models().model('NameList.Model')
const ObjectId = useStatic('ObjectId')
const docs = use('modules/globals/static/documentation/genderize.docs')

module.exports = {
    main: async (request, response) => {
        response.send('genderize\'s server running...')
    },
    docs: async (request, response) => {
        response.render('docs/index', docs.publish())
    },
    apidocs: async (request, response) => {
        const config = _.result(request.configs, 'documentation', '')
        response.json(docs.publish(config))
    },
    getname: async (request, response) => {
        response.send('hello')
    },
    updatename: async (request, response) => {
        response.send('hello')
    },
    removename: async (request, response) => {
        response.send('hello')
    }
}
