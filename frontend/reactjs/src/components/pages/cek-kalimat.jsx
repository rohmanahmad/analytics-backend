import React, { Component, Fragment } from 'react';

// load main components
import Header from '../header.jsx'
import LeftSide from '../leftside.jsx'
import Footer from '../footer.jsx'

// child components
import BreadCumb from '../childs/breadcumb.jsx'

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
