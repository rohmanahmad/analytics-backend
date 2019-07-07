import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

function ListMenu (props) {
    const list = [
        {
            title: 'Dashboard',
            link: '/dashboard',
            icon: 'fas fa-tachometer-alt',
            custom_class: 'nav-link-success',
            badge: 'NEW'
        },
        {
            title: 'Analisis Sentimen',
            icon: '',
            is_title: true
        },
        {
            title: 'Kosa Kata',
            link: '/kosa-kata',
            icon: 'fas fa-font'
        },
        {
            title: 'Kalimat Contoh',
            link: '/kalimat/contoh',
            icon: 'fas fa-superscript'
        },
        {
            title: 'Cek Kalimat',
            link: '/kalimat/cek',
            icon: 'fas fa-quote-right'
        },
        {
            title: 'Analisis Gender',
            icon: '',
            is_title: true
        },
        {
            title: 'Data Gender',
            link: '/gender/data',
            icon: 'fas fa-account'
        }
    ]
    return (
        <ul className="nav">
            {
                list.map(i => {
                    let liContent = ''
                    if (!i.is_title) {
                        const icon = 'nav-icon ' + i.icon
                        const classes = i.custom_class ? `nav-link ${i.custom_class}` : 'nav-link'
                        liContent = <NavLink to={i.link} className={classes} activeClassName="active">
                                        <i className={icon || ''}></i> {i.title}
                                        {i.badge ? <span className="badge badge-primary">{i.badge}</span> : ''}
                                    </NavLink>
                    }
                    const titleClass = (i.is_title ? 'nav-title ' : 'nav-item ') + (i.title_class ? i.title_class : '')
                    return (<li className={titleClass} key={i.title}>
                        {i.is_title ? i.title : ''}
                        {liContent}
                    </li>)
                })
            }
        </ul>
    )
}

class LeftSide extends Component {
    render () {
        return this.desktopUI
    }
    get mobileUI () {
        return (
            'mobile'
        )
    }
    get desktopUI () {
        return (
            <div className="sidebar">
                <nav className="sidebar-nav">
                    <ListMenu mobile={this.props.mobile}/>
                </nav>
                <div className="brand-minimizer text-center" style={{background: '#4dbd74', height: '50px', paddingTop: '20px'}}>APP V1.2.0</div>
            </div>
        )
    }
}

export default LeftSide