import React, { Component, Fragment } from 'react';

// load main components
import Header from '../header.jsx'
import LeftSide from '../leftside.jsx'
import Footer from '../footer.jsx'

// child components
import BreadCumb from '../childs/breadcumb.jsx'
import DashboardSummaries from '../childs/dashboard.summaries.jsx'
import Detail1 from '../childs/dashboard.detail1.jsx'
// import Detail2 from '../childs/dashboard.detail2'

// libs
import isMobile from '../../libs/mobile-detector'
// options
const breadCumbData = ['Admin:/', 'Dashboard']

class Dashboard extends Component {
    constructor (props) {
        super(props)
        this.state = {}
    }
    componentDidMount () {
        this.setState({mobile: isMobile ? 'yes' : 'no'})
    }
    render () {
        return (
            <React.Fragment>
                <Header mobile={this.state.mobile}/>
                <div className="app-body">
                    <LeftSide mobile={this.state.mobile}/>
                    <main className="main">
                        <BreadCumb data={breadCumbData} mobile={this.state.mobile}/>
                        <div className="container-fluid">
                            {/* summaries cards */}
                            <div className="row">
                                <DashboardSummaries mobile={this.state.mobile}/>
                            </div>
                            {/* end of summaries cards */}
                            <div className="row">
                                <div className="col-md-12">
                                    <Detail1 mobile={this.state.mobile}/>
                                </div>
                            </div>
                            {/* <div className="row">
                                <div className="col-md-12">
                                    <Detail2/>
                                </div>
                            </div> */}
                        </div>
                    </main>
                </div>
                <Footer mobile={this.state.mobile}/>
            </React.Fragment>
        )
    }
}

export default Dashboard
