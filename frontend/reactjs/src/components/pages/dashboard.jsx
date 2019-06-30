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

// options
const breadCumbData = ['Admin:/', 'Dashboard']

class Dashboard extends Component {
    render () {
        return (
            <React.Fragment>
                <Header/>
                <div className="app-body">
                    <LeftSide/>
                    <main className="main">
                        <BreadCumb data={breadCumbData}/>
                        <div className="container-fluid">
                            {/* summaries cards */}
                            <div className="row">
                                <DashboardSummaries/>
                            </div>
                            {/* end of summaries cards */}
                            <div className="row">
                                <div className="col-md-12">
                                    <Detail1/>
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
                <Footer/>
            </React.Fragment>
        )
    }
}

export default Dashboard
