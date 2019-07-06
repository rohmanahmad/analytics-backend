import React, { Component } from 'react';

import {Form} from 'react-bootstrap'

class KosaKataList extends Component {
    render () {
        const otherBahasa = [
            'Jawa',
            'Sunda',
            'Madura',
            'Batak',
            'Bugis',
            'Minang',
            'Aceh',
            'Bali',
            'Melayu',
            'Banjar'
        ]
        return (
            <div className="card">
                <div className="card-header">List</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            {
                                otherBahasa
                                    .map(x => <Form.Check inline type={'checkbox'} id={`default-${x}`} label={x} key={x}/>)
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
                                            otherBahasa
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
