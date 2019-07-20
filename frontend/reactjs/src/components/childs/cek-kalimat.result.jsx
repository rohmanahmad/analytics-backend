import React, { Component } from 'react';

class CekKalimatResult extends Component {
    constructor (props) {
        super(props)
    }
    componentDidMount () {
        console.log('cek_kalimat_result mounted...')
    }
    componentWillUnmount () {
        // do if this component was unmount
    }
    render () {
        switch (this.props.mobile) {
            case 'no':
                return this.desktopUI
                break;
            case 'yes':
                return this.mobileUI
                break;
            default:
                return ('')
        }
    }
    get mobileUI () {
        return (
            'mobile'
        )
    }
    get desktopUI () {
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
