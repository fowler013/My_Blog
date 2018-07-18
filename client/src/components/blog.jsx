import React from 'react';
import { Link } from 'react-router-dom';

//these are the cards that on the home page!

const Blog = (props) => {
    return (
        <div className="card m-1 bg-light" style = {{ width:" 350px"}}>
        <div className="card-body text-left cardFont" > 
        <blockquote className="blockquote mb-0">
        Title:
        <h3 className="card-text">
                    {props.post.title}
                </h3>
                <div className= "scroll-box ">
                    <p>{props.post.content}</p> 
                </div>
          <footer className="blockquote-footer">
            <small>
              Author: <cite title="Source Title">{props.post.author}</cite>
            </small>
          </footer>
          <footer className="blockquote-footer">
            <small>
              Tags: <cite title="Source Title">{props.post.tag}</cite>
            </small>
          </footer>
        </blockquote><Link to={`/${props.post.id}`} className="btn btn-secondary btn-sm">Expand</Link>
        </div>
        
      </div>
        
    );
};

export default Blog;













































{/* <div className="card m-1 bg-light" style = {{ width:" 250px"}} >
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


                
               

            </div>
        </div> */}