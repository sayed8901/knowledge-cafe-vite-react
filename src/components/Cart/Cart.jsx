import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const readTime = props.readTime;
    return (
        <div className='cart-container'>
            <div className='time-spent'>
                <h3>Spent time on read: {readTime} min</h3>
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