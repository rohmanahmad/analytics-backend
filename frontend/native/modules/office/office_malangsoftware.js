'use strict'

const main = require('./components/main').default
const utilities = require('../utilities').default

localStorage.setItem('token', 'ooo')

utilities.checkCredentials()

console.log('main :', main)
