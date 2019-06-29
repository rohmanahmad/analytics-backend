import React, {Component} from 'react'

// load components
import Header from './components/header'
import LeftSide from './components/leftside'

// page Component
import Dashboard from './components/pages/dashboard'

class Home extends Component {
    render () {
        return (
            <React.Fragment>
                <Header/>
                <div className="app-body">
                    <LeftSide/>
                    <Dashboard/>
                </div>
            </React.Fragment>
        )
    }
}

export default Home