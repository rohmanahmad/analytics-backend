'use strict'

const _ = use('_')

const Models = use('Models')

const Genders = new Models().model('Genders.Model')
const NameList = new Models().model('NameList.Model')
// const ObjectId = useStatic('ObjectId')
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
    getNameWords: async (request, response) => {
        try {
            let {name} = request.body
            name = (!name ? '' : name).replace(/\,/g, ' ').toLowerCase()
            const names = name
                .split(' ')
                .map(x => x.trim())
                .filter(x => x.length > 0)
            const criteria = {
                name: {
                    $in: names
                }
            }
            let items = await NameList
                .find(criteria)
            response.send({
                status: 200,
                message: 'OK',
                total: items.length,
                items
            })
        } catch (e) {
            response.apiError(e)
        }
    },
    getName: async (request, response) => {
        try {
            let {name} = request.body
            name = name.toLowerCase()
            const names = (!name ? '' : name)
                .split(',')
                .map(x => x.trim())
                .filter(x => x.length > 0)
            const criteria = {
                name: {
                    $in: names
                }
            }
            const items = await Genders
                .find(criteria)
            response.send({
                status: 200,
                message: 'OK',
                total: items.length,
                items
            })
        } catch (e) {
            response.apiError(e)
        }
    },
    updateNameWords: async (request, response) => {
        try {
            let {name, male, female, none} = request.body
            name = (!name ? '' : name).replace(/\,/g, ' ').toLowerCase()
            male = parseInt(male || 0)
            female = parseInt(female || 0)
            none = parseInt(none || 0)
            const names = (!name ? '' : name)
                .split(' ')
                .map(x => x.trim())
                .filter(x => x.length > 0)
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
                await NameList
                    .updateOne({
                        'name': x
                    }, data, {
                        upsert: true
                    })
            }
            response.apiSuccess()
        } catch (e) {
            response.apiError(e)
        }
    },
    updateName: async (request, response) => {
        try {
            let {name, male, female, none} = request.body
            name = (!name ? '' : name).toLowerCase()
            male = parseInt(male || 0)
            female = parseInt(female || 0)
            none = parseInt(none || 0)
            const total = (male + female + none)
            const data = {
                male: (total * male) / 100,
                female: (total * female) / 100,
                none: (total * none) / 100
            }
            let gender = 0
            for (let m in data) {
                if (data[m] > gender) gender = data[m]
            }
            const names = (!name ? '' : name)
                .split(',')
                .map(x => x.trim())
                .filter(x => x.length > 0)
            for (let n in names) {
                const item = {
                    'name': names[n],
                    'evaluate': data,
                    'gender': gender,
                    'created_at': new Date(),
                    'updated_at': new Date()
                }
                await Genders
                    .updateOne({'name': item.name}, item, {
                        upsert: true
                    })
            }
            response.apiSuccess()
        } catch (e) {
            response.apiError(e)
        }
    },
    removeNameWords: async (request, response) => {
        try {
            let {name} = request.body
            name = (!name ? '' : name).replace(/\,/g, ' ').toLowerCase()
            const names = (!name ? '' : name)
                .split(' ')
                .map(x => x.trim())
                .filter(x => x.length > 0)
            await NameList
                .remove({
                    'name': {
                        $in: names
                    }
                })
            response.apiSuccess()
        } catch (e) {
            response.apiError(e)
        }
    },
    removeName: async (request, response) => {
        try {
            let {name} = request.body
            name = name.toLowerCase()
            const names = (!name ? '' : name)
                .split(',')
                .map(x => x.trim())
                .filter(x => x.length > 0)
            await Genders
                .remove({
                    'name': {
                        '$in': names
                    }
                })
            response.apiSuccess()
        } catch (e) {
            response.apiError(e.message)
        }
    }
}
