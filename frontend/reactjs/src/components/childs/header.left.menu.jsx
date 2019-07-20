import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const navTopLeft = [
    {title: 'Dashboard', url: '/dashboard', custom_class: ''},
    {title: 'Users', url: '/users', custom_class: ''},
    {title: 'Settings', url: '/settings', custom_class: ''}
 ]

class HeaderLeftMenu extends Component {
    constructor (props) {
        super(props)
    }
    componentDidMount () {
        console.log('header_left_menu mounted...')
    }
    componentWillUnmount () {
        // do if this component was unmount
    }
    render () {
        switch (this.props.mobile) {
            case 'no':
                return this.desktopUI
                break;
            case 'yes':
                return this.mobileUI
                break;
            default:
                return ('')
        }
    }
    get mobileUI () {
        return (
            'mobile'
        )
    }
    get desktopUI () {
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
