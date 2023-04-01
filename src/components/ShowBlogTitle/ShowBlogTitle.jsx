import React from 'react';
import "./ShowBlogTitle.css";

const ShowBlogTitle = (props) => {
    const cart = props.cart;
    
    let blogTitle;
    for(const newsItem of cart){
        blogTitle = newsItem.blogTitle;
        console.log(blogTitle);
    }

    return (
        <div className='blog-heading'>
            <h4>{blogTitle}</h4>
        </div>
    );
};

export default ShowBlogTitle;