import React, { Component } from 'react';
import BlogForm from './blogForm';
import BlogList from './blogList';

class Blogs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogs: []

        };
    }

    componentDidMount() {
        this.getBlogs();
    }

    getBlogs() {
        fetch('/api/blogs/')
            .then((response) => {
                return response.json();
            }).then((blogs) => {
                console.log(blogs);

                this.setState({
                    blogs: blogs
                });
            }).catch((err) => {
                console.log(err);
            });
    }

    addBlog(post) {
        console.log(post);
        fetch('/api/blogs/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        }).then(() => {
            this.getBlogs();
        }).catch((err) => {
            console.log(err);
        });
    }



    render() {
        return (
            <div className="container divContainer"style= {{'paddingBottom': '11em'}}>
                <BlogForm action="Create" postBlog={(post) => { this.addBlog(post); }} />
                <BlogList blogs={this.state.blogs} />
            </div>
        );
    }
}

export default Blogs;