import React, {Component, Fragment} from 'react'

class DashboardSummariesDetail1 extends Component {
    constructor (props) {
        super(props)
    }
    componentDidMount () {
        console.log('dashboard_summaries_detail_1 mounted...')
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
                <div className="card-header">Traffic &amp; Sales</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="callout callout-info">
                                        <small className="text-muted">New Clients</small>
                                        <br/>
                                        <strong className="h4">9,123</strong>
                                        <div className="chart-wrapper">
                                            <canvas id="sparkline-chart-1" width="100" height="30"></canvas>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="callout callout-danger">
                                        <small className="text-muted">Recuring Clients</small>
                                        <br/>
                                        <strong className="h4">22,643</strong>
                                        <div className="chart-wrapper">
                                            <canvas id="sparkline-chart-2" width="100" height="30"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="mt-0"/>
                            <div className="progress-group mb-4">
                                <div className="progress-group-prepend">
                                    <span className="progress-group-text">Monday</span>
                                </div>
                                <div className="progress-group-bars">
                                    <div className="progress progress-xs">
                                        <div className="progress-bar bg-info" role="progressbar" style={{width: '34%'}} aria-valuenow="34"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="progress progress-xs">
                                        <div className="progress-bar bg-danger" role="progressbar" style={{width: '78%'}} aria-valuenow="78"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-group mb-4">
                                <div className="progress-group-prepend">
                                    <span className="progress-group-text">Tuesday</span>
                                </div>
                                <div className="progress-group-bars">
                                    <div className="progress progress-xs">
                                        <div className="progress-bar bg-info" role="progressbar" style={{width: '56%'}} aria-valuenow="56"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="progress progress-xs">
                                        <div className="progress-bar bg-danger" role="progressbar" style={{width: '94%'}} aria-valuenow="94"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-group mb-4">
                                <div className="progress-group-prepend">
                                    <span className="progress-group-text">Wednesday</span>
                                </div>
                                <div className="progress-group-bars">
                                    <div className="progress progress-xs">
                                        <div className="progress-bar bg-info" role="progressbar" style={{width: '12%'}} aria-valuenow="12"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="progress progress-xs">
                                        <div className="progress-bar bg-danger" role="progressbar" style={{width: '67%'}} aria-valuenow="67"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-group mb-4">
                                <div className="progress-group-prepend">
                                    <span className="progress-group-text">Thursday</span>
                                </div>
                                <div className="progress-group-bars">
                                    <div className="progress progress-xs">
                                        <div className="progress-bar bg-info" role="progressbar" style={{width: '43%'}} aria-valuenow="43"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="progress progress-xs">
                                        <div className="progress-bar bg-danger" role="progressbar" style={{width: '91%'}} aria-valuenow="91"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-group mb-4">
                                <div className="progress-group-prepend">
                                    <span className="progress-group-text">Friday</span>
                                </div>
                                <div className="progress-group-bars">
                                    <div className="progress progress-xs">
                                        <div className="progress-bar bg-info" role="progressbar" style={{width: '22%'}} aria-valuenow="22"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="progress progress-xs">
                                        <div className="progress-bar bg-danger" role="progressbar" style={{width: '73%'}} aria-valuenow="73"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-group mb-4">
                                <div className="progress-group-prepend">
                                    <span className="progress-group-text">Saturday</span>
                                </div>
                                <div className="progress-group-bars">
                                    <div className="progress progress-xs">
                                        <div className="progress-bar bg-info" role="progressbar" style={{width: '53%'}} aria-valuenow="53"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="progress progress-xs">
                                        <div className="progress-bar bg-danger" role="progressbar" style={{width: '82%'}} aria-valuenow="82"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-group mb-4">
                                <div className="progress-group-prepend">
                                    <span className="progress-group-text">Sunday</span>
                                </div>
                                <div className="progress-group-bars">
                                    <div className="progress progress-xs">
                                        <div className="progress-bar bg-info" role="progressbar" style={{width: '9%'}} aria-valuenow="9"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="progress progress-xs">
                                        <div className="progress-bar bg-danger" role="progressbar" style={{width: '69%'}} aria-valuenow="69"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="callout callout-warning">
                                        <small className="text-muted">Pageviews</small>
                                        <br/>
                                        <strong className="h4">78,623</strong>
                                        <div className="chart-wrapper">
                                            <canvas id="sparkline-chart-3" width="100" height="30"></canvas>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="callout callout-success">
                                        <small className="text-muted">Organic</small>
                                        <br/>
                                        <strong className="h4">49,123</strong>
                                        <div className="chart-wrapper">
                                            <canvas id="sparkline-chart-4" width="100" height="30"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="mt-0"/>
                            <div className="progress-group">
                                <div className="progress-group-header">
                                    <i className="icon-user progress-group-icon"></i>
                                    <div className="f">Male</div>
                                    <div className="ml-auto font-weight-bold">43%</div>
                                </div>
                                <div className="progress-group-bars">
                                    <div className="progress progress-xs">
                                        <div className="progress-bar bg-warning" role="progressbar" style={{width: '43%'}}
                                            aria-valuenow="43" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-group mb-5">
                                <div className="progress-group-header">
                                    <i className="icon-user-female progress-group-icon"></i>
                                    <div className="f">Female</div>
                                    <div className="ml-auto font-weight-bold">37%</div>
                                </div>
                                <div className="progress-group-bars">
                                    <div className="progress progress-xs">
                                        <div className="progress-bar bg-warning" role="progressbar" style={{width: '43%'}}
                                            aria-valuenow="43" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-group">
                                <div className="progress-group-header align-items-end">
                                    <i className="icon-globe progress-group-icon"></i>
                                    <div className="f">Organic Search</div>
                                    <div className="ml-auto font-weight-bold mr-2">191.235</div>
                                    <div className="text-muted small">(56%)</div>
                                </div>
                                <div className="progress-group-bars">
                                    <div className="progress progress-xs">
                                        <div className="progress-bar bg-success" role="progressbar" style={{width: '56%'}}
                                            aria-valuenow="56" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-group">
                                <div className="progress-group-header align-items-end">
                                    <i className="icon-social-facebook progress-group-icon"></i>
                                    <div className="f">Facebook</div>
                                    <div className="ml-auto font-weight-bold mr-2">51.223</div>
                                    <div className="text-muted small">(15%)</div>
                                </div>
                                <div className="progress-group-bars">
                                    <div className="progress progress-xs">
                                        <div className="progress-bar bg-success" role="progressbar" style={{width: '15%'}}
                                            aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-group">
                                <div className="progress-group-header align-items-end">
                                    <i className="icon-social-twitter progress-group-icon"></i>
                                    <div className="f">Twitter</div>
                                    <div className="ml-auto font-weight-bold mr-2">37.564</div>
                                    <div className="text-muted small">(11%)</div>
                                </div>
                                <div className="progress-group-bars">
                                    <div className="progress progress-xs">
                                        <div className="progress-bar bg-success" role="progressbar" style={{width: '11%'}}
                                            aria-valuenow="11" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-group">
                                <div className="progress-group-header align-items-end">
                                    <i className="icon-social-linkedin progress-group-icon"></i>
                                    <div className="f">LinkedIn</div>
                                    <div className="ml-auto font-weight-bold mr-2">27.319</div>
                                    <div className="text-muted small">(8%)</div>
                                </div>
                                <div className="progress-group-bars">
                                    <div className="progress progress-xs">
                                        <div className="progress-bar bg-success" role="progressbar" style={{width: '8%'}} aria-valuenow="8"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashboardSummariesDetail1
