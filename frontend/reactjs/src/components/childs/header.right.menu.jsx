import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Popover, OverlayTrigger } from 'react-bootstrap'

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
   constructor (props) {
      super(props)
   }
   componentDidMount () {
         console.log('header_right_menu mounted...')
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
          <ul className="nav navbar-nav ml-auto">
             {
                topRightMenu.map(x => {
                   if (x.dropdown) {
                      return (
                         <li className={"nav-item " + x.dropdown.class} key={x.icon} style={{marginLeft: 30 + 'px'}}>
                           <OverlayTrigger
                              trigger="click"
                              key={'bottom'}
                              placement={'bottom'}
                              overlay={
                                 <Popover
                                    id={`popover-positioned-${'bottom'}`}
                                    title='Akun'>
                                       <Nav className="mr-auto">
                                          <div className="dropdown-menu-right" style={{width: '150px'}}>
                                             {
                                                (x.dropdown.list && typeof x.dropdown.list.map === 'function')
                                                   ? x.dropdown.list.map(x => {
                                                      return (
                                                         <Fragment key={x.title}>
                                                            {
                                                               (x.header)
                                                                  ? ''
                                                                  : <Nav.Link href={x.url}>
                                                                        {/* {
                                                                           (x.icon) ? <i className={x.icon}></i> : ''
                                                                        } */}
                                                                        {x.title}
                                                                        {
                                                                           (x.badge) ? <span className={"badge " + x.badge.style}>{x.badge.value}</span> : ''
                                                                        }
                                                                     </Nav.Link>
                                                            }
                                                         </Fragment>
                                                      )
                                                   })
                                                   : ''
                                             }
                                          </div>
                                       </Nav>
                                    </Popover>
                              }>
                           {
                              (x.dropdown.image)
                              ? <a className="nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                    <img className="img-avatar" src={x.dropdown.image} alt="" />
                                 </a>
                              : ''
                           }
                           </OverlayTrigger>
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
