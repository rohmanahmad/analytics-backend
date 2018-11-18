'use strict'

const _ = use('_')
const utils = use('Utils.Helper')
const paths = use('modules/globals/static/documentation/paths')

module.exports = function (req, res, next) {
    utils.debugme('... middleware [input]')
    const routerPath = (req.route.path || '')
        .replace(
            (req.router_prefix || '/api'),
            ''
        )
    const routerGroup = req.router_group || ''
    const routerMethod = req.method.toLowerCase()
    const listPaths = paths(routerGroup) || {}
    const validInput = _.result(listPaths, `${routerPath}.${routerMethod}.parameters`, [])
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
