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
    } , []);
    

    const [readTime, setReadTime] = useState("");

    const addReadTime = (time) => {
        const previousReadTime = JSON.parse(localStorage.getItem('readTime'));
        if(previousReadTime){
            const sumTime = previousReadTime + time;
            localStorage.setItem('readTime', sumTime);
            setReadTime(sumTime);
        }
        else{
            localStorage.setItem('readTime', time);
            setReadTime(time);
        }
        console.log(previousReadTime, time)
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
                <Cart readTime = {readTime}></Cart>
            </div>
        </div>
    );
};

export default Main;