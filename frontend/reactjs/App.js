import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// import components
import Dashboard from './src/components/pages/dashboard.jsx'
import PageNotFound from './src/components/pages/not-found.jsx'
import KosaKata from './src/components/pages/kosakata.jsx'
import ContohKalimat from './src/components/pages/contoh-kalimat.jsx'
import CekKalimat from './src/components/pages/cek-kalimat.jsx'
import Login from './src/components/pages/login.jsx'

// import css and all static files
import './src/assets/coreui/css/style.css'
import './src/assets/fontawesome-5/css/all.min.css'

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/kosa-kata" component={KosaKata} />
                    <Route exact path="/kalimat/contoh" component={ContohKalimat} />
                    <Route exact path="/kalimat/cek" component={CekKalimat} />
                    <Route exact path="/login" component={Login} />
                    <Route exact component={PageNotFound} />
                </Switch>
            </Router>
        )
    }
}
export default App