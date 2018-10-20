'use strict'

const config = require('./configs/validation.conf')

function validateValue (data) {
    const defaultVal = {
        'id': 'string',
        'indo_keyword': 'string',
        'en_keyword': 'string',
        'type': 'string',
        'description': 'string',
        'limit': 'int',
        'page': 'int',
        'sort': 'asc'
    }
    let x = {}
    for (let o in data) {
        let def = data[o]
        if (defaultVal[o] === 'int') {
            def = parseInt(data[o]) || 0
        }
        if (o === 'sort') {
            def = data[o] === 'desc' ? 'desc' : 'asc'
        }
        x[o] = def
    }
    return x
}

module.exports = function (req, res, next) {
    const route = req.getRoute()
    const routeName = route.name || false
    console.log({routeName})
    if (routeName) {
        const routeConf = config[routeName]
        let reqAll = {}
        if (routeConf) {
            const required = routeConf.required
            const all = routeConf.all
            if (all) {
                for (let i of all) {
                    if (i) {
                        const name = Object.keys(i)[0]
                        const type = i[name]
                        let value = null
                        switch (type) {
                        case 'path':
                            value = req.params ? req.params[name] : null
                            break;

                        case 'query':
                            value = req.query ? req.query[name] : null
                            break;

                        case 'form':
                            value = req.body ? req.body[name] : null
                            break;

                        default:
                            break;
                        }
                        if (value && value.length > 0) {
                            reqAll[name] = value
                        }
                    }
                }
            }
            let errorValidation = []
            if (required) {
                for (let o of required) {
                    if (!reqAll[o] || reqAll[o] === '') {
                        errorValidation.push(`${o} is required`)
                    }
                }
            }
            if (errorValidation.length > 0) {
                next(new Error(errorValidation))
            }
            req.all = validateValue(reqAll)
        }
    }
    next()
}
