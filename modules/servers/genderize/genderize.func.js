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
    getnamewords: async (request, response) => {
        let {name} = request.body
        name = (!name ? '' : name).replace(/\,/g, ' ').toLowerCase()
        const names = name
            .split(' ')
            .map(x => x.trim())
            .filter(x => x.length > 0)
        let list = await NameList
            .find({
                name: {
                    $in: names
                }
            })
        if (list) {
            list = _.reduce(list, function (r, x) {
                return r
            }, {})
        }
        response.send(names)
    },
    getnamelist: async (request, response) => {
        let {name} = request.body
        name = name.toLowerCase()
        const names = (!name ? '' : name)
            .split(' ')
            .map(x => x.trim())
            .filter(x => x.length > 0)
        // await Genders
        response.send(names)
    },
    updatename: async (request, response) => {
        let {name, male, female, none} = request.body
        name = (!name ? '' : name).replace(/\,/g, ' ').toLowerCase()
        male = parseInt(male || 0)
        female = parseInt(female || 0)
        none = parseInt(none || 0)
        const names = (!name ? '' : name)
            .split(' ')
            .map(x => x.trim())
            .filter(x => x.length > 0)
        try {
            for (let x of names) {
                const data = {
                    'name': x,
                    'gender': {
                        male,
                        female,
                        none
                    },
                    'created_at': new Date(),
                    'updated_at': new Date()
                }
                console.log(data)
                await NameList
                    .updateOne({
                        'name': x
                    }, data, {
                        upsert: true
                    })
            }
            await Genders
                .updateOne({'key': name}, {
                    'key': name,
                    'evaluate': {
                        'male': 100,
                        'vemale': 0,
                        'none': 0
                    },
                    'gender': gender,
                    'created_at': new Date(),
                    'updated_at': new Date()
                }, {
                    upsert: true
                })
            response.apiSuccess()
        } catch (e) {
            response.apiError(e)
        }
    },
    removename: async (request, response) => {
        let {name} = request.body
        name = name.toLowerCase()
        const names = (!name ? '' : name)
            .split(' ')
            .map(x => x.trim())
            .filter(x => x.length > 0)
        try {
            for (let x of names) {
                await NameList
                    .deleteOne({'name': x})
            }
            response.apiSuccess()
        } catch (e) {
            response.apiError(e)
        }
    }
}
