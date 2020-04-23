import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Pages
import Home from "../Pages/Home";
import Trending from "../Pages/Trending";
import Lookbook from "../Pages/Lookbook";
import Explore from "../Pages/Explore";

// Bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

export default class Navbar extends Component {
    render() {
        return (
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" 
                data-toggle="collapse" data-target="#navbarNav" 
                aria-controls="navbarNav" aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to={ "/" }>
                            Home<span className="sr-only">(current)</span>
                            </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={ "/trending" }>Trending
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" 
                        to={ "/explore" }>Explore</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" 
                        to={ "/pieces" }>Pieces</Link>
                    </li>
                    </ul>
                </div>
            </nav>
            <div className="switch-router">
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route path="/trending" component={ Trending } />
                    <Route path="/explore" component={ Explore } />
                    <Route path="/pieces" component={ Lookbook } />
                </Switch>
            </div>
            </Router>
        );
    }
}