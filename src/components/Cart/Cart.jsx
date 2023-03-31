import React, { useEffect, useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    const readTime = props.readTime;

    const [time, setTime] = useState(readTime);

    useEffect( () => {
        const getTotalReadTime = localStorage.getItem('readTime');
        setTime(getTotalReadTime);

    } , [readTime])
    
    return (
        <div className='cart-container'>
            <div className='time-spent'>
                <h3>Spent time on read: {time} min</h3>
            </div>
            <div className='cart-panel'>
                <h3>Bookmarked Blogs: </h3>
                <div className='blog-heading'>
                    <h4>blog title goes here..</h4>
                </div>
            </div>
        </div>
    );
};

export default Cart;