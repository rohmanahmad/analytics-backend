import React, {Component} from 'react'

class PageNotFound extends Component {
    render () {
        const h = window.innerHeight
        const p = (h/2)/2
        return (
            <div className="container" style={{height: h + 'px', paddingTop: p + 'px'}}>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="clearfix">
                            <h1 className="float-left display-3 mr-4">404</h1>
                            <h4 className="pt-3">Oops! Maaf</h4>
                            <p className="text-muted">Halaman yang anda cari tidak ditemukan.</p>
                        </div>
                        <div className="input-prepend input-group">
                            <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-search"></i>
                            </span>
                            </div>
                            <input className="form-control" size="16" placeholder="Coba cari disini"/>
                            <span className="input-group-append">
                            <button className="btn btn-info" type="button">Cari</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageNotFound