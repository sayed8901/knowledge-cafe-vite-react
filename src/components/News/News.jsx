import React from 'react';
import './News.css'

const News = (props) => {
    const {id, blogTitle, coverImage, authorThumbnail, publishedDate, readTimeInMinutes} = props.newsItem;
    return (
        <div>
            <h2>news title: {blogTitle}</h2>
        </div>
    );
};

export default News;