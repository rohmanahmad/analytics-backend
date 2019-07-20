'use strict'

const path = require('path')
const { AlertError } = require('./utilities').default

const XHRdomain = process.env.API_URL
let headers = {
    'Accept': 'application/json',
    'X-Header-Author': 'malangsoftware_group_agent'
}
const token = localStorage.getItem('token')
if (token) {
    headers['Authorization'] = `Bearer ${token}`
}

// setting up the ajax request
$.ajaxSetup({ headers })

let xhr = {}

xhr.geturl = function (endpoint) {
    if (!endpoint) throw new Error('Invalid Endpoint!')
    const validUrl = path.join(XHRdomain, endpoint)
    return validUrl
}

const validTypes = ['POST', 'GET', 'PUT', 'DELETE']
xhr.validateType = function (type) {
    if (!type) throw new Error('Invalid Type')
    if (validTypes.indexOf(type.toUppercase()) <= 0) throw new Error('Invalid Type')
    return type.toUppercase()
}

xhr.send = function (type, opt = {}) {
    return new Promise((resolve, reject) => {
        try {
            const start = new Date().getTime()
            if (!type) throw new Error('no Type defined')
            if (typeof opt !== 'object') throw new Error('opt params must an object')
            if (!opt.url) throw new Error('no URL defined on opt')
            opt.url = this.geturl(opt.url)
            opt.type = this.validateType(type)
            opt.success = function (res) {
                return resolve(res)
            }
            opt.error = function (err) {
                AlertError(err)
                reject(err)
            }
            $.ajax(opt)
                .done(() => {
                    const time = new Date().getTime() - start
                    console.log(`[${time}] request done ${opt}`)
                })
        } catch (err) {
            console.log(err)
        }
    })
}

export default xhr
