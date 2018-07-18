import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import About from './about';
import Blogs from './blogs';
import SingleBlog from './single';
import Nav from './nav';



class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    
                    
                    
                    
                    <Nav  />
                    <Switch>
                        <Route exact path="/" component = {Blogs} />
                        <Route exact path="/:id" component = {SingleBlog} />
                       <Route exact path = "/about" component = {About} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;