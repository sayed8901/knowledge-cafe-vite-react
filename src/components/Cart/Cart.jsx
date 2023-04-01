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
    
    const cart = props.cart;

    const [blog, setBlog] = useState([]);

    const getBlogsFromLocalStorage = JSON.parse(localStorage.getItem('blogTitle'));

    useEffect( () => {
        if(getBlogsFromLocalStorage){
            setBlog(getBlogsFromLocalStorage);
        }
        // console.log(blog);
    } , [cart]);
    

    return (
        <div className='cart-container'>
            <div className='time-spent'>
                {/* use here 'updatedTime' get from 'useState' above declared */}
                <h3>Spent time on read: {updatedTime} min</h3>
            </div>
            <div className='cart-panel'>
                <h3>Bookmarked Blogs: {blog.length}</h3>
                {/* <ShowBlogTitle cart = {cart}></ShowBlogTitle> */}
                <div>
                    {
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