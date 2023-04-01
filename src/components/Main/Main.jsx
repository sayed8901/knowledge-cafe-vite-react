import React, { useEffect, useState } from 'react';
import './Main.css';
import News from '../News/News';
import Cart from '../Cart/Cart';

const Main = () => {
    // to get fetched data & set them in 'blogs' to map on it later on
    const [blogs, setBlogs] = useState([]);
    
    // to fetch data from 'data.json' file
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    } , []);
    

    // readTime part:

    // handle read time btn & to pass 'readTime' via 'Cart' component later on
    const [readTime, setReadTime] = useState("");

    // making a function for handling 'read time' to pass & use on the 'News' component later on for using with btn onClick
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
        // console.log(previousReadTime, time)
    }


    // Bookmark part:
    
    const [cart, setCart] = useState([])

    // making a function for handling 'bookmark' to pass & use on the 'News' component later on for using with btn onClick
    const handleBookmarked = (news) => {
        // console.log('bookmarked', news);
        const newCart = [...cart, news];
        setCart(newCart);
    }

    return (
        <div className='main-container'>
            <div>
                {
                    // map of 'blogs' to extract single 'newsItem' from it & also pass it to 'News' component
                    blogs.map(news => 
                    <News
                        newsItem = {news}
                        key = {news.id}
                        // passing the 'addReadTime' function to News 'component' for using with btn onClick
                        addReadTime = {addReadTime}

                        handleBookmarked = {handleBookmarked}
                    ></News>)
                }
            </div>
            <div>
                {/* passing the 'readTime' to 'Cart'  component */}
                <Cart 
                    readTime = {readTime}
                    cart = {cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Main;