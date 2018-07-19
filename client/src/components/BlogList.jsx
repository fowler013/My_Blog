import React, { Component, Fragment } from 'react';
import Blog from './blog';

class BlogList extends Component {
    render() {
        return (
            <Fragment> 
                <div className="d-flex flex-wrap" style = {{'height: 800 px': 'overflow-y: scroll'}}>
                {this.props.blogs.map((blog) => {
                    return (
                        <Blog key={blog.id} post={blog} />
                    );
                })}
            </div>
            </Fragment>
        )
    }
}

export default BlogList;