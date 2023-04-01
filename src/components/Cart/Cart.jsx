import React, { useEffect, useState } from 'react';
import './Cart.css';
import ShowBlogTitle from '../ShowBlogTitle/ShowBlogTitle';

const Cart = (props) => {
    // readTime part:

    // receiving 'readTime' function from its parent 'Main.jsx' component via props
    const readTime = props.readTime;

    // 'use State' to handle total 'read time' working along with 'useEffect'
    const [updatedTime, setUpdatedTime] = useState(readTime);

    // to handle auto effect-updating the 'read time' on reload using 'useEffect'
    useEffect( () => {
        const getTotalReadTime = localStorage.getItem('readTime');
        setUpdatedTime(getTotalReadTime);
    } , [readTime])
    


    // cart part:
    
    // receiving 'cart' function from its parent 'Main.jsx' component via props
    const cart = props.cart;

    // 'use State' to handle total 'blogs data saved on local storage' working along with 'useEffect'
    const [blog, setBlog] = useState([]);

    const getBlogsFromLocalStorage = JSON.parse(localStorage.getItem('blogTitle'));

    // to handle auto effect-updating the 'cart data' on reload using 'useEffect'
    useEffect( () => {
        if(getBlogsFromLocalStorage){
            setBlog(getBlogsFromLocalStorage);
        }
        // console.log(blog);
    } , [cart]);
    

    return (
        <div className='cart-container'>
            <div className='time-spent'>
                {/* use here 'updatedTime' get from 'useState' above declared to get 'updated read time' */}
                <h3>Spent time on read: {updatedTime} min</h3>
            </div>
            <div className='cart-panel'>
                {/* use here 'blog.length' get from 'useState' above declared to get 'no of bookmarks already saved on cart' */}
                <h3>Bookmarked Blogs: {blog.length}</h3>
                <div>
                    {
                        // calling 'ShowBlogTitle' component to display the saved blog title here 
                        blog.map(news => (
                            <ShowBlogTitle 
                                blog = {news}
                                key = {news.id}
                            ></ShowBlogTitle>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;