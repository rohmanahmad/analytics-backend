import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
// libs
import { result } from 'lodash'

class Breadcumb extends Component {
    constructor (props) {
        super(props)
        this.state = {
            breacumbData: []
        }
    }
    componentDidMount () {
        this.setState((state, props) => ({
            breacumbData: result(props, 'data', ['Home'])
        }))
    }
    render () {
        const brd = this.state.breacumbData
        return (
            <ol className="breadcrumb">
                {
                    brd.map(x => {
                        const splitter = x.split(':')
                        return (
                            <li className="breadcrumb-item" key={x}>
                                {splitter[1] ? <NavLink to={splitter[1]}>{splitter[0]}</NavLink> : splitter[0]}
                            </li>
                        )
                    })
                }
                <li className="breadcrumb-menu d-md-down-none">
                    <div className="btn-group" role="group" aria-label="Button group">
                        <a className="btn" href="#">
                        <i className="icon-speech"></i>
                        </a>
                        <a className="btn" href="./">
                        <i className="icon-graph"></i> &nbsp;Dashboard</a>
                        <a className="btn" href="#">
                        <i className="icon-settings"></i> &nbsp;Settings</a>
                    </div>
                </li>
            </ol>
        )
    }
}

export default Breadcumb
