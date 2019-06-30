import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import avatarDefault from '../../assets/coreui/img/avatars/avatar.default.jpg'

const topRightMenu = [
    {icon: 'fas fa-bell', url: '#', badge: {style: 'badge-danger', value: '3'}},
    {icon: 'fas fa-list', url: '#', badge: {style: 'badge-success', value: '3'}},
    {icon: 'fas fa-puzzle-piece', url: '#', badge: {style: 'badge-warning', value: '3'}},
    {
       icon: 'no-icon',
       url: '#',
       dropdown: {
          class: 'dropdown',
          image: avatarDefault,
          list: [
             {title: 'Information', header: true},
             {title: 'Profile', icon: 'fa fa-user', url: '/user/profile', badge: {style: '', value: ''}},
             {title: 'Updates', icon: 'fa fa-bell-o', url: '/user/updates', badge: {style: '', value: ''}},
             {title: 'Messages', icon: 'fa fa-envelope-o', url: '/user/messages', badge: {style: '', value: ''}},
             {title: 'Tasks', icon: 'fa fa-tasks', url: '/user/tasks', badge: {style: '', value: ''}},
             {title: 'Comments', icon: 'fa fa-comments', url: '/user/comments', badge: {style: '', value: ''}},
             {title: 'Account', header: true},
             {title: 'Logout', icon: 'fa fa-lock', url: '/user/logout', badge: {style: '', value: ''}}
          ]
       }
    }
 ]

class HeaderRightMenu extends Component {
    render () {
        return (
            <ul className="nav navbar-nav ml-auto">
               {
                  topRightMenu.map(x => {
                     if (x.dropdown) {
                        return (
                           <li className={"nav-item " + x.dropdown.class} key={x.icon} style={{marginLeft: 30 + 'px'}}>
                              {
                                 (x.dropdown.image)
                                    ? <a className="nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                          <img className="img-avatar" src={x.dropdown.image} alt="" />
                                       </a>
                                    : ''
                              }
                              <div className="dropdown-menu dropdown-menu-right">
                                 {
                                    (x.dropdown.list && typeof x.dropdown.list.map === 'function')
                                       ? x.dropdown.list.map(x => {
                                          return (
                                             <Fragment key={x.title}>
                                                {
                                                   (x.header)
                                                      ? <div className="dropdown-header text-center">
                                                            <strong>{x.title}</strong>
                                                         </div> 
                                                      : <NavLink to={x.url} className="dropdown-item">
                                                            {
                                                               (x.icon) ? <i className={x.icon}></i> : ''
                                                            }
                                                            {x.title}
                                                            {
                                                               (x.badge) ? <span className={"badge " + x.badge.style}>{x.badge.value}</span> : ''
                                                            }
                                                         </NavLink>
                                                }
                                             </Fragment>
                                          )
                                       })
                                       : ''
                                 }
                              </div>
                           </li>
                        )
                     } else {
                        return (
                           <li className="nav-item d-md-down-none" key={x.icon}>
                              <NavLink className="nav-link" to={x.url}>
                                 { (x.icon) ? <i className={"fas " + x.icon}></i> : '' }
                                 { (x.badge) ? <span className={`badge badge-pill ${x.badge.style}`}>{x.badge.value}</span> : '' }
                              </NavLink>
                           </li>
                        )
                     }
                  })
               }
            </ul>
        )
    }
}

export default HeaderRightMenu
