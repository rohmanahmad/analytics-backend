'use strict'

const path = require('path')

let utilities = {}

utilities.selectors = {
    'main-content': '#main-content',
    'alertcontainer': '#alert-container'
}

utilities.jq = function (selector) {
    const regSelector = this.selectors[selector]
    if (regSelector) return $(regSelector)
    return $(selector)
}

utilities.AlertError = function (msg) {
    this.jq('alertcontainer').html(`<div class="alert alert-danger invalid-login" role="alert">${msg}</div>`)
}

utilities.checkCredentials = function () {
    const token = localStorage.getItem('token')
    if (!token || token === '') window.location = path.join(process.env.BASE_URL, 'login')
}

export default utilities
