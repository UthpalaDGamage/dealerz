import React, { useState, useEffect } from 'react';
export const FlashSale = () => {
    const items = [1, 2, 3, 4].map(num => {
        return {
            id: num,
            name: `Slide ${num}`,
            details: `Tropical Suit`,
            image: 'https://soliloquywp.com/wp-content/uploads/2013/05/action-backlit-beach-1046896-1200x450_c.jpg'
        }
    });
    return (
        <>
            <div className='carousels'>
                carousels should be here
            </div>
        </>
    )
}