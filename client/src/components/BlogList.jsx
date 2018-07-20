import React, { Component, Fragment } from 'react';
import Blog from './blog';

class BlogList extends Component {
    render() {
        return (
            <Fragment> 
                <div className="d-flex flex-wrap blogContainer">
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