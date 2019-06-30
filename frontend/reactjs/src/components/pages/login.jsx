import React, { Component } from 'react'

class Login extends Component {
    constructor (props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.SubmitForm = this.SubmitForm.bind(this)
        this.handleChangeInputUsername = this.handleChangeInputUsername.bind(this)
        this.handleChangeInputPassword = this.handleChangeInputPassword.bind(this)
    }

    componentDidMount () {
        try {
            const token = localStorage.getItem('current-token')
            if (!token) throw new Error('Invalid Token')
            // place logic here
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card-group">
                            <div className="card p-4">
                                <div className="card-body">
                                    <form onSubmit={this.SubmitForm}>
                                        <h1>Login</h1>
                                        <p className="text-muted">Sign In to your account</p>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fas fa-user"></i>
                                                </span>
                                            </div>
                                            <input value={this.state.username} onChange={this.handleChangeInputUsername} className="form-control" type="text" placeholder="Username/Email"/>
                                        </div>
                                        <div className="input-group mb-4">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fas fa-lock"></i>
                                                </span>
                                            </div>
                                            <input value={this.state.password} onChange={this.handleChangeInputPassword} className="form-control" type="password" placeholder="Password"/>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <button id="btn-login" className="btn btn-primary px-4">Login</button>
                                            </div>
                                            <div className="col-6 text-right">
                                                <button id="btn-forgot" className="btn btn-link px-0" type="button">Forgot?</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    handleChangeInputUsername (event) {
        this.setState({
            username: event.target.value
        })
    }

    handleChangeInputPassword (event) {
        this.setState({
            password: event.target.value
        })
    }

    SubmitForm (event) {
        event.preventDefault()
        console.log(this.state)
    }
}

export default Login