import React, { Component } from 'react';
import { render } from 'react-dom';

class BlogForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            author: '', // adding the author to the blog//
            title: '',
            content: '',
            tag: ''
        };
    }
    handleNameChange(author){
        this.setState({author});
    }

    handleInputChange(title) {
        this.setState({ title });
    }

    handleContentChange(content) {
        this.setState({ content });
    }

    handleTagChange(tag){
        this.setState({ tag })
    }

    render() {
        return (
            <form className="card p-3 m-1 formContainer" >
                <label
                    htmlFor="title-input"
                    className="d-block m-1 text-dark cardFont">{this.props.action} post:
                </label>
                <input
                    value={this.state.author}
                    onChange={(event) => { this.handleNameChange(event.target.value) }}
                    className="form-control w-70 m-1 d-inline text formAuthor cardFont"
                    placeholder="Blog Author"
                />
                <input
                    value={this.state.title}
                    onChange={(event) => { this.handleInputChange(event.target.value) }}
                    className="form-control w-70 m-1 d-inline formTitle cardFont"
                    placeholder="Blog Title"
                />
                <div className="form-group">
                    <textarea value={this.state.content}
                 onChange={(event) => { this.handleContentChange(event.target.value) }}
                 className="form-control w-70 m-1 d-inline bg-light formContent cardFont"
                 placeholder="Whats on your mind..."></textarea>
                </div>
                <div className="form-group">
                    <input value={this.state.tag}
                 onChange={(event) => { this.handleTagChange(event.target.value) }}
                 className="form-control w-70 m-2 d-inline bg-light formContent cardFont"
                 placeholder="tags" />
                </div>
                
                <button
                    onClick={() => { this.props.postBlog(this.state) }}
                    type="button"
                    className="btn btn-dark text secondary m-2 cardFont">Post blog!
                </button>
            </form>
        );
    }
}

export default BlogForm;