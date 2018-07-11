import React, { Component, Fragment } from 'react';
import Blog from './blog';

class BlogList extends Component {
    render() {
        return (
            <Fragment>
                {this.props.blogs.map((blog) => {
                    return (
                        <Blog key={blog.id} post={blog} />
                    );
                })}
            </Fragment>
        );
    }
}

export default BlogList;