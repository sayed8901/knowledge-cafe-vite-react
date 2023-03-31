import React, { useEffect, useState } from 'react';
import './Main.css';
import News from '../News/News';
import Cart from '../Cart/Cart';

const Main = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    } , [])

    const addReadTime = (time) => {
        console.log('time added', time)
    }

    return (
        <div className='main-container'>
            <div>
                {
                    blogs.map(news => 
                    <News
                        newsItem = {news}
                        key = {news.id}
                        addReadTime = {addReadTime}
                    ></News>)
                }
            </div>
            <div>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Main;