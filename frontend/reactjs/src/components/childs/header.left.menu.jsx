import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const navTopLeft = [
    {title: 'Dashboard', url: '/dashboard', custom_class: ''},
    {title: 'Users', url: '/users', custom_class: ''},
    {title: 'Settings', url: '/settings', custom_class: ''}
 ]

class HeaderLeftMenu extends Component {
    render () {
        return (
            <ul className="nav navbar-nav d-md-down-none">
                {
                    navTopLeft.map(x => {
                    return (
                        <li className="nav-item px-3" key={x.url}>
                            <NavLink className="nav-link" to={x.url}>{x.title}</NavLink>
                        </li>
                    )
                    })
                }
            </ul>
        )
    }
}

export default HeaderLeftMenu
