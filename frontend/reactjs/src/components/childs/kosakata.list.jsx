import React, { Component } from 'react';

import {Form} from 'react-bootstrap'

class KosaKataList extends Component {
    constructor (props) {
        super(props)
        this.state = {
            bahasa: {
                'Jawa': false,
                'Sunda': false,
                'Madura': false,
                'Batak': false,
                'Bugis': false,
                'Minang': false,
                'Aceh': false,
                'Bali': false,
                'Melayu': false,
                'Banjar': false
            }
        }
        this.toggleBahasa = this.toggleBahasa.bind(this)
    }

    componentDidMount () {
        console.log('kosakata_list mounted...')
        // do if this component was mount
    }

    componentWillUnmount () {
        // do if this component was unmount
    }

    toggleBahasa (e) {
        const isChecked = e.target.checked
        const key = e.target.value
        this.setState((prevState) => ({
            bahasa: {...prevState.bahasa, [key]: isChecked}
        }))
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
        const bahasa = this.state.bahasa
        return (
            <div className="card">
                <div className="card-header">List</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            {
                                Object.keys(bahasa)
                                    .map(x => <Form.Check inline type={'checkbox'} value={x} label={x} key={x} onChange={this.toggleBahasa}/>)
                            }
                        </div>
                        <div className="col-md-12" style={{overflow: 'auto', 'marginTop': '10px', maxHeight: '400px'}}>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th rowSpan="2">#</th>
                                        <th rowSpan="2">Sentiment</th>
                                        <th colSpan="12">Pilihan Bahasa</th>
                                        <th rowSpan="2">Aksi</th>
                                    </tr>
                                    <tr>
                                        <td>Indonesia</td>
                                        <td>Inggris</td>
                                        {
                                            Object.keys(bahasa)
                                                .filter(x => bahasa[x] === true)
                                                .map(x => <td key={x}>{x}</td>)
                                        }
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default KosaKataList
