'use strict'

const content = require('../../content').default
const utilities = require('../../utilities').default

let login = {}

login.selectors = {
    'username': '#username',
    'userpass': '#userpass',
    'btnlogin': '#btn-login',
    'btnforgot': '#btn-forgot',
    'btnregister': '#btn-register'
}

login.content = function () {
    return `
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card-group">
                <div class="card p-4">
                    <div class="card-body">
                        <h1>Login</h1>
                        <p class="text-muted">Sign In to your account</p>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                <i class="fas fa-user"></i>
                                </span>
                            </div>
                            <input id="username" class="form-control" type="text" placeholder="Username/Email">
                        </div>
                        <div class="input-group mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                <i class="fas fa-lock"></i>
                                </span>
                            </div>
                            <input id="userpass" class="form-control" type="password" placeholder="Password">
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <button id="btn-login" class="btn btn-primary px-4" type="button">Login</button>
                            </div>
                            <div class="col-6 text-right">
                                <button id="btn-forgot" class="btn btn-link px-0" type="button">Forgot password?</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card text-white bg-primary py-5 d-md-down-none" style="width:44%">
                    <div class="card-body text-center">
                        <div>
                            <h2>Sign up</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <button id="btn-register" class="btn btn-primary active mt-3" type="button">Register Now!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}

login.dologin = function () {
    const data = {
        username: utilities.jq(this.selectors['username']).val(),
        userpass: utilities.jq(this.selectors['userpass']).val()
    }
    if (!data.username || !data.userpass) {
        const msg = 'username and password didn\'t match'
        utilities.AlertError(msg)
        throw new Error(msg);
    }
}
login.doforgot = function () {
    console.log('doforgot()')
}
login.doregister = function () {
    console.log('doregister()')
}

login.listen = function () {
    utilities.jq(this.selectors['btnlogin'])
        .on('click', () => {
            this.dologin()
        })
    utilities.jq(this.selectors['btnforgot'])
        .on('click', () => {
            this.doforgot()
        })
    utilities.jq(this.selectors['btnregister'])
        .on('click', () => {
            this.doregister()
        })
}

login.render = function () {
    content.render('main-content', this.content(), {})
    this.listen()
}

export default login
