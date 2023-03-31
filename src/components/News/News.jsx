import React from 'react';
import './News.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookBookmark, faBookmark } from '@fortawesome/free-solid-svg-icons';

const News = (props) => {
    const {id, blogTitle, coverImage, authorThumbnail, author, publishedDate, readTimeInMinutes} = props.newsItem;
    return (
        <div className='news'>
            <img src={coverImage} alt="" />
            <div className='flex'>
                <div className='flex1'>
                    <img src={authorThumbnail} alt="" />
                    <div className='author-info'>
                        <h4>{author}</h4>
                        <p>{publishedDate}</p>
                    </div>
                </div>
                <div className='flex1'>
                    <p>{readTimeInMinutes} min read</p>
                    <FontAwesomeIcon icon={faBookmark} />
                </div>
            </div>
            <h2>{blogTitle}</h2>
        </div>
    );
};

export default News;