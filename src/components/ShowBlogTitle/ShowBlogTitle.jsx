import React from 'react';
import "./ShowBlogTitle.css";

const ShowBlogTitle = (props) => {
    const headlines = props.blog.blogTitle;

    return (
        <div className='blog-heading'>
            <h4>{headlines}</h4>
        </div>
    );
};

export default ShowBlogTitle;