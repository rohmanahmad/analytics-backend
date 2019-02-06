'use strict'

const _ = use('_')
const Models = use('Models')

const StoreCategories = new Models().model('StoreCategories.Model')

module.exports = {
    main: async (request, response) => {
        response.render('store/index')
    },
    mobile: async (request, response) => {
        const isDev = request.query.dev === 'true'
        response.render('store/mobile', {isDev})
    },
    categories: async (request, response) => {
        let criteria = {}
        const {id, slug, parent} = request.query
        if (id) criteria['id'] = id
        if (slug) criteria['slug'] = slug
        if (parent) criteria['parent_id'] = parent
        let cat = await StoreCategories.find(criteria).select(['id', 'name', 'icon', 'parent_id', 'order'])
        const parentCat = cat.filter(x => !x.parent)
        const grouplist = _.groupBy(cat, 'parent_id')
        const list = _.reduce(parentCat, (res, x) => {
            const obj = Object.assign({parent: {id: x.id, name: x.name, icon: x.icon, order: x.order}}, {
                childs: _.result(grouplist, x.id, null)
            })
            res.push(obj)
            return res
        }, [])
        response.apiCollection(list)
    }
}
