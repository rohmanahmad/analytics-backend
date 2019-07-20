import React, { Component } from 'react';

class ContohKalimatPattern extends Component {
    constructor (props) {
        super(props)
    }
    componentDidMount () {
        console.log('contoh_kalimat_pattern mounted...')
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
                <div className="card-header">List</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-8" style={{overflow: 'auto', height: '400px'}}>
                            <table className="table table-hover">
                                <tbody>
                                    {
                                        [1,2,3,4,5,6,7,8,9,10]
                                            .map(x => {
                                                return (
                                                <tr key={x}>
                                                    <td width="30">{x}</td>
                                                    <td>V + Adj + Conj</td>
                                                    <td width="100">
                                                        <button className="btn btn-outline-primary">
                                                        {x + 1} contoh
                                                        </button>
                                                    </td>
                                                </tr>)
                                            })
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-4" style={{overflow: 'auto', height: '350px'}}>
                                <table className="table table-borderless">
                                    <tbody>
                                        {
                                            [1,2,3,4,5,6,7,8,9,10]
                                                .map(x => {
                                                    return (
                                                    <tr key={x}>
                                                        <td width="20">{x}</td>
                                                        <td>Saya Senang Sekali</td>
                                                    </tr>)
                                                })
                                        }
                                    </tbody>
                                </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContohKalimatPattern
