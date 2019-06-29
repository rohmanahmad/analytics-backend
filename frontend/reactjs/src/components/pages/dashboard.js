import React, { Component, Fragment } from 'react';

// child components
import BreadCumb from '../childs/breadcumb'
import DashboardSummaries from '../childs/dashboard.summaries'

class Dashboard extends Component {
    render () {
        return (
            <main className="main">
                <BreadCumb/>
                <div className="container-fluid">
                    {/* summaries cards */}
                    <div className="row">
                        <DashboardSummaries/>
                    </div>
                    {/* end of summaries cards */}
                </div>
            </main>
        )
    }
}

export default Dashboard
