import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// import components
import Home from './src/home'
import PageNotFound from './src/not-found'
import KosaKata from './src/kosa-kata'
import Kalimat from './src/kalimat'
import Login from './src/login'

// import css and all static files
import './src/assets/coreui/css/style.css'
import './src/assets/fontawesome-5/css/all.min.css'

class App extends Component {
    render() {
        return (
            <Router>
                    {/* <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/kosa-kata">Kosa Kata</Link>
                        </li>
                        <li>
                            <Link to="/kalimat">Kalimat</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>

                    <hr /> */}
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/kosa-kata" component={KosaKata} />
                            <Route exact path="/kalimat-contoh" component={Kalimat} />
                            <Route exact path="/cek-kalimat" component={Kalimat} />
                            <Route exact path="/halaman-setting" component={Kalimat} />
                            <Route exact path="/login" component={Login} />
                            <Route exact component={PageNotFound} />
                        </Switch>
            </Router>
        )
    }
}
export default App