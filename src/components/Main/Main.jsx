import React, { useEffect, useState } from 'react';
import './Main.css';
import News from '../News/News';

const Main = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    } , [])


    return (
        <div className='main-container'>
            <div className='blog-container'>
                {
                    blogs.map(news => <News
                        newsItem = {news}
                        key = {news.id}
                    ></News>)
                }
            </div>
            <div className='cart-container'>
                <h2>cart</h2>
            </div>
        </div>
    );
};

export default Main;