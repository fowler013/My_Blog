import React, { Component } from 'react';
import { render } from 'react-dom';

class BlogForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: ''
        };
    }

    handleInputChange(title) {
        this.setState({ title });
    }

    handleContentChange(content) {
        this.setState({ content });
    }

    render() {
        return (
            <form className="card p-3 m-1">
                <label
                    htmlFor="title-input"
                    className="d-block m-2">{this.props.action} post:
                </label>
                <input
                    value={this.state.title}
                    onChange={(event) => { this.handleInputChange(event.target.value) }}
                    className="form-control w-70 m-2 d-inline"
                    placeholder="Blog Title"
                />
                <div className="form-group">
                    <textarea value={this.state.content}
                 onChange={(event) => { this.handleContentChange(event.target.value) }}
                 className="form-control w-70 m-2 d-inline"
                 placeholder="Entire"></textarea>
                </div>
                
                <button
                    onClick={() => { this.props.postBlog(this.state) }}
                    type="button"
                    className="btn btn-danger m-2">Post blog!
                </button>
            </form>
        );
    }
}

export default BlogForm;