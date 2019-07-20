import React, {Component, Fragment} from 'react'
import { Line } from 'react-chartjs-2'

class DashboardSummaries extends Component {
    constructor (props) {
        super(props)
    }
    componentDidMount () {
        console.log('dashboard_summaries mounted...')
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
            <Fragment>
                {this.summary('total_kosakata')}
                {this.summary('total_kalimat')}
                {this.summary('total_workers')}
                {this.summary('total_gender_crawled')}
            </Fragment>
        )
    }

    getOptions () {
        return {
            tooltips: {
                enabled: false
            },
            maintainAspectRatio: false,
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                gridLines: {
                  color: 'transparent',
                  zeroLineColor: 'transparent'
                },
                ticks: {
                  fontSize: 2,
                  fontColor: 'transparent'
                }
              }],
              yAxes: [{
                display: false,
                ticks: {
                  display: false,
                  min: 35,
                  max: 89
                }
              }]
            },
            elements: {
              line: {
                borderWidth: 1
              },
              point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4
              }
            }
        }
    }

    summary (type) {
        const data = {
            'total_kosakata': {
                title: 'Total Kosakata',
                val: 1329,
                bg: 'bg-primary'
            },
            'total_kalimat': {
                title: 'Total Kalimat',
                val: 3312,
                bg: 'bg-info'
            },
            'total_workers': {
                title: 'Total Workers',
                val: 34,
                bg: 'bg-warning'
            },
            'total_gender_crawled': {
                title: 'Total Gender Crawled',
                val: 45935670,
                bg: 'bg-danger'
            },
        }
        const randData = {
            'total_kosakata': [58, 76, 44, 45, 51, 55, 60],
            'total_kalimat': [45, 56, 84, 44, 51, 55, 60],
            'total_workers': [65, 80, 84, 81, 51, 55, 40],
            'total_gender_crawled': [60, 45, 54, 78, 51, 55, 50]
        }
        const {title, val, bg} = data[type]
        const chartData = {
            labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
            datasets: [{
                label: 'c',
                backgroundColor: 'rgba(255,255,255,0)',
                borderColor: 'rgba(255,255,255,.55)',
                data: randData[type]
            }]
        }
        const options = this.getOptions()
        return (
            <div className="col-sm-6 col-lg-3">
                <div className={"card text-white " + bg}>
                    <div className="card-body pb-0">
                    <div className="btn-group float-right">
                        <button className="btn btn-transparent dropdown-toggle p-0" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-cog"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                    <div className="text-value">{Number(val).toLocaleString('id')}</div>
                    <div>{title}</div>
                    </div>
                    <div className="chart-wrapper mt-3 mx-3" style={{height: 70 + 'px'}}>
                        <div className="chartjs-size-monitor">
                            <div className="chartjs-size-monitor-expand">
                                <div className=""></div>
                            </div>
                            <div className="chartjs-size-monitor-shrink">
                                <div className=""></div>
                            </div>
                        </div>
                        <div className="chart chartjs-render-monitor" id="card-chart1" height="70" style={{display: 'block', width: 235 + 'px', height: 70 + 'px'}} width="235">
                            <Line data={chartData} options={options}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashboardSummaries
