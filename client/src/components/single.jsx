import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import BlogForm from './blogForm';

class Single extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            blog: {}
        };
    }

    componentDidMount() {
        this.getBlog();
    }

    getBlog() {
        fetch(`/api/blogs/${this.props.match.params.id}`)
            .then((response) => {
                return response.json();
            }).then((blog) => {
                console.log(blog);

                this.setState({
                    blog: blog
                });
            }).catch((err) => {
                console.log(err);
            });
    }

    updateBlog(post) {
        fetch(`/api/blogs/${this.props.match.params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        }).then(() => {
            this.setState({
                blog: post
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    deleteBlog() {
        fetch(`/api/blogs/${this.props.match.params.id}`, {
            method: 'DELETE',
        }).then(() => {
            this.props.history.push('/');

        }).catch((err) => {
            console.log(err);
        });
    }




    render() {
        let post = this.state.blog;
        return (
            <div>
                <div className="card m-1 bg-info">
                    <div className="card-body text-left">
                        <p className="card-text">
                            {post.title}
                        </p>
                        <p className="card-text">
                            {post.content}
                        </p>
                    </div>
                </div>


                <div className="container">
                    <div key={this.state.blog.id} className="card m-1 bg-info">
                        <div className="card-body text-left">

                        </div>
                        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => { this.deleteBlog(); }}>DELETE</button>
                        
                    </div >
                </div>

                <BlogForm action="Update" postBlog={(post) => { this.updateBlog(post); }} />
            </div>

        )


    };
}


export default Single;