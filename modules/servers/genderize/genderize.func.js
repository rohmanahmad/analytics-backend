'use strict'

const _ = use('_')

const Models = use('Models')

const Genders = new Models().model('Genders.Model')
const NameList = new Models().model('NameList.Model')
// const ObjectId = useStatic('ObjectId')
const docs = use('modules/globals/static/documentation/genderize.docs')

module.exports = {
    main: async (request, response) => {
        const c = request.query.dev === 'true' ? new Date().getTime() : 'static'
        response.render('genderize/index', {c})
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
            console.log(e)
            response.apiError(e)
        }
    },
    getName: async (request, response) => {
        try {
            let {name} = request.body
            name = name.toLowerCase()
            const names = (!name ? '' : name)
                .split(',')
                .map(x => x.trim().split(' '))
                .filter(x => x.length > 0)
            const criteria = {
                name: {
                    $in: _.flatten(names)
                }
            }
            const items = await NameList
                .find(criteria)
            const itms = _.transform(items, function (res, x) {
                res[x.name] = x.gender
                return res
            }, {})
            let gen = []
            for (let name of names) {
                gen.push({
                    name: name.join(' '),
                    evaluate: _.each(name, (x, y) => y)
                })
            }
            response.send({
                status: 200,
                message: 'OK',
                items: gen
            })
        } catch (e) {
            console.log(e)
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
            console.log(e)
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
            const data = [
                {
                    type: 'male',
                    value: male,
                    average: (total * male) / 100
                },
                {
                    type: 'female',
                    value: female,
                    average: (total * female) / 100
                },
                {
                    type: 'none',
                    value: none,
                    average: (total * none) / 100
                }
            ]
            let gender = _.maxBy(data, (x) => x.value)
            const evaluate = _.reduce(data, function (r, x) {
                r[x.type] = x.value
                return r
            }, {})
            const names = (!name ? '' : name)
                .split(',')
                .map(x => x.trim())
                .filter(x => x.length > 0)
            for (let n in names) {
                const item = {
                    'name': names[n],
                    'evaluate': evaluate,
                    'gender': gender.type,
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
            console.log(e)
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
            console.log(e)
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
            if (names.length > 1) {
                await Genders
                    .deleteMany({
                        'name': {
                            '$in': names
                        }
                    })
            } else {
                await Genders
                    .deleteOne({
                        'name': {
                            '$in': names
                        }
                    })
            }
            response.apiSuccess()
        } catch (e) {
            console.log(e)
            response.apiError(e.message)
        }
    }
}
