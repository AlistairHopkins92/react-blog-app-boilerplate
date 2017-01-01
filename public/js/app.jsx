'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
// import Routes from "./routes.jsx";
// import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';

import Home from './views/home.jsx';
import Blog from './views/blog.jsx';
import Projects from './views/projects.jsx';
import Contact from './views/contact.jsx';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={Home} />
        <Route path='/blog' component={Blog} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
    </Router>, document.getElementById('container'));
