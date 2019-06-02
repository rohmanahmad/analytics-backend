import React, { Component } from 'react';

import FullLogo from '../assets/coreui/img/brand/logo.svg'
import MinLogo from '../assets/coreui/img/brand/sygnet.svg'
import avatarDefault from '../assets/coreui/img/avatars/avatar.default.jpg'

function Logo () {
   return (
      <a className="navbar-brand" href="#">
         <img className="navbar-brand-full" src={FullLogo} width="89" height="25" alt="Logo" />
         <img className="navbar-brand-minimized" src={MinLogo} width="30" height="30" alt="Logo" />
      </a>
   )
}

function NavbarMenuLeft () {
   return (
      <ul className="nav navbar-nav d-md-down-none">
         <li className="nav-item px-3">
            <a className="nav-link" href="#">Dashboard</a>
         </li>
         <li className="nav-item px-3">
            <a className="nav-link" href="#">Users</a>
         </li>
         <li className="nav-item px-3">
            <a className="nav-link" href="#">Settings</a>
         </li>
      </ul>
   )
}

function NavbarMenuRight () {
   return (
      <ul className="nav navbar-nav ml-auto">
         <li className="nav-item d-md-down-none">
            <a className="nav-link" href="#">
               <i className="fas fa-bell"></i>
               <span className="badge badge-pill badge-danger">5</span>
            </a>
         </li>
         <li className="nav-item d-md-down-none">
            <a className="nav-link" href="#">
               <i className="fas fa-list"></i>
            </a>
         </li>
         <li className="nav-item d-md-down-none">
            <a className="nav-link" href="#">
               <i className="fas fa-location-pin"></i>
            </a>
         </li>
         <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
               <img className="img-avatar" src={avatarDefault} alt="" />
            </a>
            <div className="dropdown-menu dropdown-menu-right">
               <div className="dropdown-header text-center">
                  <strong>Account</strong>
               </div>
               <a className="dropdown-item" href="#">
                  <i className="fa fa-bell-o"></i> Updates
                  <span className="badge badge-info">42</span>
               </a>
               <a className="dropdown-item" href="#">
                  <i className="fa fa-envelope-o"></i> Messages
                  <span className="badge badge-success">42</span>
               </a>
               <a className="dropdown-item" href="#">
                  <i className="fa fa-tasks"></i> Tasks
                  <span className="badge badge-danger">42</span>
               </a>
               <a className="dropdown-item" href="#">
                  <i className="fa fa-comments"></i> Comments
                  <span className="badge badge-warning">42</span>
               </a>
               <div className="dropdown-header text-center">
                  <strong>Settings</strong>
               </div>
               <a className="dropdown-item" href="#">
                  <i className="fa fa-user"></i> Profile</a>
               <a className="dropdown-item" href="#">
                  <i className="fa fa-wrench"></i> Settings</a>
               <a className="dropdown-item" href="#">
                  <i className="fa fa-usd"></i> Payments
                  <span className="badge badge-secondary">42</span>
               </a>
               <a className="dropdown-item" href="#">
                  <i className="fa fa-file"></i> Projects
                  <span className="badge badge-primary">42</span>
               </a>
               <div className="dropdown-divider"></div>
               <a className="dropdown-item" href="#">
                  <i className="fa fa-shield"></i> Lock Account</a>
               <a className="dropdown-item" href="#">
                  <i className="fa fa-lock"></i> Logout</a>
            </div>
         </li>
      </ul>
   )
}

class Header extends Component {
   render() {
      return (
         <React.Fragment>
            <header className="app-header navbar">
               <button className="navbar-toggler sidebar-toggler d-lg-none mr-auto" type="button" data-toggle="sidebar-show">
                  <span className="navbar-toggler-icon"></span>
               </button>
               {/* <Logo/> */}&nbsp;
               <button className="navbar-toggler sidebar-toggler d-md-down-none" type="button" data-toggle="sidebar-lg-show">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <NavbarMenuLeft/>
               <NavbarMenuRight/>
               <button className="navbar-toggler aside-menu-toggler d-md-down-none" type="button" data-toggle="aside-menu-lg-show">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <button className="navbar-toggler aside-menu-toggler d-lg-none" type="button" data-toggle="aside-menu-show">
                  <span className="navbar-toggler-icon"></span>
               </button>
            </header>
         </React.Fragment>
      )
   }
}

export default Header