import React, {Component} from 'react'

class LeftSide extends Component {
    render () {
        return (
            <div className="sidebar">
                <nav className="sidebar-nav">
                <ul className="nav">
                    <li className="nav-item">
                    <a className="nav-link" href="index.html">
                        <i className="nav-icon icon-speedometer"></i> Dashboard
                        <span className="badge badge-primary">NEW</span>
                    </a>
                    </li>
                    <li className="nav-title">Theme</li>
                    <li className="nav-item">
                    <a className="nav-link" href="colors.html">
                        <i className="nav-icon icon-drop"></i> Colors</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="typography.html">
                        <i className="nav-icon icon-pencil"></i> Typography</a>
                    </li>
                    <li className="nav-title">Components</li>
                    <li className="nav-item">
                    <a className="nav-link" href="charts.html">
                        <i className="nav-icon icon-pie-chart"></i> Charts</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link nav-link-danger" href="https://coreui.io/pro/" target="_top">
                        <i className="nav-icon icon-layers"></i> Try CoreUI
                        <strong>PRO</strong>
                    </a>
                    </li>
                </ul>
                </nav>
                <button className="sidebar-minimizer brand-minimizer" type="button"></button>
            </div>
        )
    }
}

export default LeftSide