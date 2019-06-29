import React, { Component, Fragment } from 'react';
import {NavLink} from 'react-router-dom'

class Breadcumb extends Component {
    render () {
        return (
            <ol className="breadcrumb">
                <li className="breadcrumb-item">Home</li>
                <li className="breadcrumb-item">
                <a href="#">Admin</a>
                </li>
                <li className="breadcrumb-item active">Dashboard</li>
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
