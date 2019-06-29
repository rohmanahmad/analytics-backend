import React, {Component, Fragment} from 'react'
import { Line } from 'react-chartjs-2'

class DashboardSummaries extends Component {
    render () {
        return (
            <Fragment>
                {this.summary('total_kosakata')}
                {this.summary('total_kalimat')}
                {this.summary('total_workers')}
                {this.summary('total_gender_crawled')}
            </Fragment>
        )
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
        const {title, val, bg} = data[type]
        const chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets:[
                {
                    label: 'My First dataset',
                    backgroundColor: 'rgb(0, 165, 224)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: [65, 59, 84, 84, 51, 55, 40]
                }
            ]
        }
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
                        <canvas className="chart chartjs-render-monitor" id="card-chart1" height="70" style={{display: 'block', width: 235 + 'px', height: 70 + 'px'}} width="235">
                            <Line data={chartData}/>
                        </canvas>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashboardSummaries
