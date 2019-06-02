import React, {Component} from 'react'

// load components
import Header from './components/header'
import LeftSide from './components/leftside'

class Home extends Component {
    render () {
        return (
            <React.Fragment>
                <Header/>
                <div className="app-body">
                    <LeftSide/>
                </div>
            </React.Fragment>
        )
    }
}

export default Home