'use strict'

const schemas = use('SwaggerUISchemas.Lib')
const _ = use('_')

const openAPITemplate = {
    'openapi': '3.0.0',
    'info': {},
    'paths': {},
    'components': {},
    'servers': [],
    'security': []
}

class Swagger {
    constructor () {
        this.name = 'Open API For ...'
        this.version = '1.0.0'
        this.myservers = []
        this.mysecurities = []
        this.jsonTemplate = _.cloneDeep(openAPITemplate)
        this.schemas()
    }

    apiname (name) {
        if (name && typeof name === 'string') this.name = this.name.replace('...', name)
        this.jsonTemplate['info']['title'] = this.name
        return this
    }

    apiversion (version) {
        if (version && typeof version === 'string') this.version = version
        this.jsonTemplate['info']['version'] = this.version
        return this
    }

    contacts (type, contact) {
        if (!type || typeof type !== 'string') throw new Error('Invalid Type of Contact')
        if (!contact || typeof contact !== 'string') throw new Error('Invalid Value of Contact')
        if (!this.jsonTemplate['info']['contact']) this.jsonTemplate['info']['contact'] = {}
        this.jsonTemplate['info']['contact'][type] = contact
        return this
    }

    servers (url, description = '') {
        try {
            if (!url || typeof url !== 'string') throw new Error('Invalid API Url')
            this.myservers.push({url, description})
            this.jsonTemplate['servers'] = this.myservers
            return this
        } catch (err) {
            throw err
        }
    }

    securities (security = {}) {
        try {
            if (security && typeof security === 'object' && Object.keys(security) && Object.keys(security).length) {
                for (let sec in security) {
                    this.jsonTemplate['security'].push({[sec]: []})
                    if (!this.jsonTemplate['components']['securitySchemes']) this.jsonTemplate['components']['securitySchemes'] = {}
                    this.jsonTemplate['components']['securitySchemes'][sec] = security[sec]
                }
            }
            return this
        } catch (err) {
            throw err
        }
    }

    paths (name) {
        try {
            if (!name) throw new Error('Invalid Name of Component')
            const paths = require(`./swaggerui/paths/${name}`)
            this.jsonTemplate['paths'] = paths
            return this
        } catch (err) {
            throw err
        }
    }

    schemas () {
        this.jsonTemplate['components']['schemas'] = schemas
    }

    createAPIDocs () {
        return this.jsonTemplate
    }
}

module.exports = Swagger
