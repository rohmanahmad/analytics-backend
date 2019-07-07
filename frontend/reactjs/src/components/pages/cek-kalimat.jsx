import React, { Component, Fragment } from 'react';

// load main components
import Header from '../header.jsx'
import LeftSide from '../leftside.jsx'
import Footer from '../footer.jsx'

// child components
import BreadCumb from '../childs/breadcumb.jsx'
import InputKalimat from '../childs/cek-kalimat.input.jsx'
import ResultKalimat from '../childs/cek-kalimat.result.jsx'

// libs
import isMobile from '../../libs/mobile-detector'
// options
const breadCumbData = ['Admin:/', 'Analisis Sentiment', 'Cek Kalimat']

class CekKalimat extends Component {
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
                                    <InputKalimat mobile={this.state.mobile}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <ResultKalimat mobile={this.state.mobile}/>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default CekKalimat
