import React from 'react';
import { Link } from 'react-router-dom';


const Blog = (props) => {
    return (
        <div className="card m-1">
            <div className="card-body text-left">
                <p className="card-text">
                    {props.post.title}
                </p>
                <p className="card-text">
                    {props.post.content}
                </p>


                <Link to={`/${props.post.id}`} className="btn btn-secondary btn-sm"> Read</Link>

            </div>
        </div>
    );
};

export default Blog;