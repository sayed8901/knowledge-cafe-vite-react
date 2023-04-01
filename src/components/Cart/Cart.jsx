import React, { useEffect, useState } from 'react';
import './Cart.css'

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


    return (
        <div className='cart-container'>
            <div className='time-spent'>
                {/* use here 'updatedTime' get from 'useState' above declared */}
                <h3>Spent time on read: {updatedTime} min</h3>
            </div>
            <div className='cart-panel'>
                <h3>Bookmarked Blogs: {cart.length}</h3>
                <div className='blog-heading'>
                    <h4>blog title goes here..</h4>
                </div>
            </div>
        </div>
    );
};

export default Cart;