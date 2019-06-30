import React, { Component, Fragment } from 'react';

// load main components
import Header from '../header.jsx'
import LeftSide from '../leftside.jsx'
import Footer from '../footer.jsx'

// child components
import BreadCumb from '../childs/breadcumb.jsx'
import KosaKataList from '../childs/kosakata.list.jsx'
import KosaKataForm from '../childs/kosakata.form.jsx';

// options
const breadCumbData = ['Admin:/', 'Analisis Sentiment', 'Kosa Kata']

class KosaKata extends Component {
    render () {
        return (
            <React.Fragment>
                <Header/>
                <div className="app-body">
                    <LeftSide/>
                    <main className="main">
                        <BreadCumb data={breadCumbData}/>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-4">
                                    <KosaKataForm/>
                                </div>
                                <div className="col-md-8">
                                    <KosaKataList/>
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

export default KosaKata
