'use strict'

const utilities = require('./utilities').default

let content = {}

content.selectors = {
}

content.render = function (selector, tag, data = {}) {
    if (!selector) throw new Error('no selector selected')
    if (!tag) throw new Error('no tag defined')
    for (let i in data) {
        tag = tag.replace(new RegExp(`/${i}/g`), data[i])
    }
    const el = utilities.jq(selector)
    if (!el) throw new Error(`${selector} ID doest exists on content`)
    el.append(tag)
}

export default content
