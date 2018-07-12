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
                <div className="card m-3 bg-light cardFont float" style = {{ width:" 550px"}}>
                    <div className="card-body text-left">
                    <label
                    htmlFor="title-input"
                    className="d-block m-2">{this.props.action} Author:
                </label>
                        <h2 className="card-text">
                            {post.author}
                        </h2>
                        <label
                    htmlFor="title-input"
                    className="d-block m-2">{this.props.action} Title:
                </label>
                        <h3 className="card-text">
                            {post.title}
                        </h3>
                        <label
                    htmlFor="title-input"
                    className="d-block m-2">{this.props.action} Thoughts:
                </label>
                        <h5 className="card-text">
                            {post.content}
                        </h5>
                    </div>
                </div>


                <div className="container" style = {{ width:" 250px"}}>
                    <div key={this.state.blog.id} className="card m-1 deleteContainer">
                        <div className="card-body text-left">

                        </div>
                        <button type="button" className="btn btn-dark btn-lg btn-block cardFont" onClick={() => { this.deleteBlog(); }}>DELETE</button>

                    </div >
                </div>
                <div className="container" style = {{ width:" 550px"}} >
                    <BlogForm action="Update" postBlog={(post) => { this.updateBlog(post); }} />
                </div>
                
            </div>

        )


    };
}


export default Single;