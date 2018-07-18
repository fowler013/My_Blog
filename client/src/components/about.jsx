import React, { Component } from 'react';
import { render } from 'react-dom';

class About extends Component {

    componentDidMount() {
        fetch('/api/blogs/')
            .then((res) => {
                return res.json();
            })
            .then((about) => console.log(about))
    }



    render() {
        return (
            <div className="container d-flex flex-column justify-content-center align-items-center p-3">
                <h1 className="section-title"> WELCOME </h1>
                <h2 className="section-title">ABOUT</h2>
                <hr className="section-hr" />
            </div>
        );
    }
}




export default About;