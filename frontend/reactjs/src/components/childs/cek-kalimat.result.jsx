import React, { Component } from 'react';

class CekKalimatResult extends Component {
    render () {
        return (
            <div className="card">
                <div className="card-header">Hasil Analisa</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9" style={{minHeight: '100px'}}>
                            text hasil
                        </div>
                        <div className="col-md-3" style={{minHeight: '100px'}}>
                            detail per word
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CekKalimatResult
