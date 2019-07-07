import React, { Component, Fragment } from 'react'
import {Accordion, Button} from 'react-bootstrap'

class KosaKataForm extends Component {
    constructor (props) {
        super(props)
    }
    componentDidMount () {
        console.log('kosakata_form mounted...')
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
                <div className="card-header">
                    Input Kata
                    <div className="card-header-actions">
                        <button className="card-header-action btn-ghost-danger">
                            <i className="fas fa-times"></i>
                        </button>
                        <button className="card-header-action btn-ghost-success">
                            <i className="fas fa-check"></i>
                        </button>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <select className="form-control" id="select1" name="select1">
                                    <option value="">Jenis Kata</option>
                                    <option value="v">Kata Kerja (Verb)</option>
                                    <option value="n">Kata Benda (Noun)</option>
                                    <option value="adj">Kata Sifat (Adjv)</option>
                                    <option value="adv">Kata Ketarangan (Advb)</option>
                                    <option value="c">Kata Sambung (Conj)</option>
                                    <option value="pre">Kata Depan (Prep)</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <select className="form-control" id="select1" name="select1">
                                    <option value="">Jenis Sentiment</option>
                                    <option value="0">None/Netral</option>
                                    <option value="1">Positif</option>
                                    <option value="-1">Negatif</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input className="form-control" placeholder="Indonesia" autoComplete="false"/>
                            </div>
                            <div className="form-group">
                                <input className="form-control" placeholder="Inggris" autoComplete="false"/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <Accordion>
                                    <Accordion.Collapse eventKey="0">
                                        <Fragment>
                                            <div className="form-group">
                                                <input className="form-control" placeholder="Jawa" autoComplete="false"/>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" placeholder="Sunda" autoComplete="false"/>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" placeholder="Madura" autoComplete="false"/>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" placeholder="Batak" autoComplete="false"/>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" placeholder="Bugis" autoComplete="false"/>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" placeholder="Minang" autoComplete="false"/>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" placeholder="Aceh" autoComplete="false"/>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" placeholder="Bali" autoComplete="false"/>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" placeholder="Melayu" autoComplete="false"/>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" placeholder="Banjar" autoComplete="false"/>
                                            </div>
                                        </Fragment>
                                    </Accordion.Collapse>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Tampilkan lebih banyak...
                                    </Accordion.Toggle>
                            </Accordion>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <button className="btn btn-square btn-outline-danger">Reset</button>
                    <button className="btn btn-square btn-outline-primary" style={{'float': 'right'}}>Save</button>
                </div>
            </div>
        )
    }
}

export default KosaKataForm
