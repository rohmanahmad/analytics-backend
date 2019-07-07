import React, { Component } from 'react';

import {Form} from 'react-bootstrap'

class CekKalimatInput extends Component {
    constructor (props) {
        super(props)
    }
    // componentDidMount () {
    //     console.log('cek_kalimat_input mounted...')
    //     console.log({props: this.props})
    // }
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
                <div className="card-header">Input Kalimat</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <Form.Control as="textarea" rows="10"></Form.Control>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <button className="btn btn-outline-primary">Analisa Kalimat</button>
                    <button className="btn btn-outline-danger" style={{float: 'right'}}>Kosongkan</button>
                </div>
            </div>
        )
    }
}

export default CekKalimatInput
