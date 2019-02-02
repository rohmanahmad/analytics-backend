'use strict'

const _ = use('_')
const utils = use('Utils.Helper')
const paths = {
    admin: require('../static/documentation/admin.docs').getPath(),
    sentiments: require('../static/documentation/sentiments.docs').getPath(),
    shares: require('../static/documentation/shares.docs').getPath(),
    users: require('../static/documentation/users.docs').getPath()
}

module.exports = function (req, res, next) {
    utils.debugme('... middleware [input]')
    const routerPath = _.result(req.route, 'path', '')
        .split('/')
        .map(x => x.indexOf(':') === 0 ? `{${x.replace(':', '')}}` : x)
        .join('/')
    const routerGroup = req.router_group || ''
    const routerMethod = req.method.toLowerCase()
    const listPaths = paths[routerGroup] || {}
    const validInput = _.result(listPaths, `${routerPath}.${routerMethod}.parameters`, [])
    // console.log(req.route.path)
    // console.log({routerGroup, routerMethod, routerPath, validInput, listPaths})
    let inputs = {}
    for (let input of validInput) {
        const name = input.name
        if (input.in === 'query') {
            inputs[name] = req.query[name]
        } else if (input.in === 'formData') {
            inputs[name] = req.body[name]
        } else if (input.in === 'path') {
            inputs[name] = req.params[name]
        }
    }
    req.validInput = inputs
    next()
}
