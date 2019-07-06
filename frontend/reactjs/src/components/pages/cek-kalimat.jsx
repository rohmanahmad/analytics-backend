import React, { Component, Fragment } from 'react';

// load main components
import Header from '../header.jsx'
import LeftSide from '../leftside.jsx'
import Footer from '../footer.jsx'

// child components
import BreadCumb from '../childs/breadcumb.jsx'
import InputKalimat from '../childs/cek-kalimat.input.jsx'
import ResultKalimat from '../childs/cek-kalimat.result.jsx'

// options
const breadCumbData = ['Admin:/', 'Analisis Sentiment', 'Cek Kalimat']

class CekKalimat extends Component {
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
                                <div className="col-md-12">
                                    <InputKalimat/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <ResultKalimat/>
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
