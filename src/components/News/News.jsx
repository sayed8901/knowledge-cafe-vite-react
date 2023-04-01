import React from 'react';
import './News.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookBookmark, faBookmark } from '@fortawesome/free-solid-svg-icons';

const News = (props) => {
    const {id, blogTitle, coverImage, authorThumbnail, author, publishedDate, readTimeInMinutes} = props.newsItem;

    // receiving 'addReadTime' function from its parent 'Main.jsx' component via props
    const addReadTime = props.addReadTime;

    const handleBookmarked = props.handleBookmarked;

    
    return (
        <div className='news'>
            <img src={coverImage} alt="" />
            <div className='flex'>
                <div className='flex1'>
                    <img src={authorThumbnail} alt="" />
                    <div className='author-info'>
                        <h3>{author}</h3>
                        <p>{publishedDate}</p>
                    </div>
                </div>
                <div className='flex1'>
                    <p>{readTimeInMinutes} min read</p>
                    <button onClick={() => handleBookmarked(props.newsItem)}
                    ><FontAwesomeIcon icon={faBookmark} /></button>
                </div>
            </div>
            <h2>{blogTitle}</h2>

            {/* usage of 'addReadTime' function which get via props from 'Main.jsx' */}
            <button onClick={() => addReadTime(readTimeInMinutes)} className='btn-read'>Mark as read</button>
        </div>
    );
};

export default News;