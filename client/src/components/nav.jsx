import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blog: ''
        };
    }

    handleInputChange(blog) {
        this.setState({ blog });
    }

    render() {
        return (
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to="/">Nivet's Blog</Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
                        <a className="nav-item nav-link" href="#">Show all entries</a>
                        <a className="nav-item nav-link" href="#">Show a random entry</a>

                    </div>
                </div>
            </nav>
        );
    };
}
export default Nav;