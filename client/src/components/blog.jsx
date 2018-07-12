import React from 'react';
import { Link } from 'react-router-dom';

//these are the cards that on the home page!

const Blog = (props) => {
    return (
        
        <div className="card m-1 bg-light float-right"style = {{ width:" 250px"}} >
            <div className="card-body text-left cardFont" >
            Author:
            <h2 className="card-text ">
                    {props.post.author}
                </h2>
                Title:
                <h3 className="card-text">
                    {props.post.title}
                </h3>Thoughts:
                <h5 className="card-text">
                    {props.post.content}
                </h5>


                <Link to={`/${props.post.id}`} className="btn btn-secondary btn-sm"> Update</Link>
               

            </div>
        </div>
    );
};

export default Blog;