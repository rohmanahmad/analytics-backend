import React, { Component, Fragment } from 'react';

// load main components
import Header from '../header.jsx'
import LeftSide from '../leftside.jsx'
import Footer from '../footer.jsx'

// child components
import BreadCumb from '../childs/breadcumb.jsx'
import KosaKataList from '../childs/kosakata.list.jsx'
import KosaKataForm from '../childs/kosakata.form.jsx';

// libs
import isMobile from '../../libs/mobile-detector'
// options
const breadCumbData = ['Admin:/', 'Analisis Sentiment', 'Kosa Kata']

class KosaKata extends Component {
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
                                <div className="col-md-4">
                                    <KosaKataForm mobile={this.state.mobile}/>
                                </div>
                                <div className="col-md-8">
                                    <KosaKataList mobile={this.state.mobile}/>
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

export default KosaKata
