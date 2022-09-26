import React, { useState, useEffect } from 'react';
import { ItemCard } from './ItemCard';
export const CategoriesShop = () => {
    const [items, setItems] = useState(Array<any>);
    useEffect(() => {
        const items = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => {
            return {
                id: num,
                name: `Category Dress ${num}`,
                details: `Tropical Suit`
            }
        });
        setItems([...items]);
    }, []);
    return (
        <>
            <div className='wrapper categories-shop'>
                <div className="title">Our Premium Collection</div>
                <div className="categories">
                    <ul>
                        <li>All Products</li>
                        <li>Coats and Jackets</li>
                        <li>Dressed</li>
                        <li>Playsuit</li>
                        <li>Short</li>
                        <li>Skirt</li>
                        <li>T-Shirt</li>
                    </ul>
                </div>
                <div className="items">
                    {items.map(item => <ItemCard key={item.id} name={item.name} description={item.details} image={item.image}></ItemCard>)}
                </div>
                <div className='load-more'>
                    <button>Find out More</button>
                </div>
            </div>
        </>
    );
}