import React, { Component, Fragment } from 'react';

// load main components
import Header from '../header.jsx'
import LeftSide from '../leftside.jsx'
import Footer from '../footer.jsx'

// child components
import BreadCumb from '../childs/breadcumb.jsx'
import PatternKalimat from '../childs/contoh-kalimat.pattern.jsx'

// libs
import isMobile from '../../libs/mobile-detector'
// options
const breadCumbData = ['Admin:/', 'Analisis Sentiment', 'Contoh Kalimat']

class ContohKalimat extends Component {
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
                            <div className="row">
                                <div className="col-md-12">
                                    <PatternKalimat mobile={this.state.mobile}/>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <Footer mobile={this.state.mobile}/>
            </React.Fragment>
        )
    }
}

export default ContohKalimat
