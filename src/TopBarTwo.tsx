import React from 'react';
import { TextField } from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser, faBell, faCartShopping } from "@fortawesome/free-solid-svg-icons";
export const TopBarTwo = () => {
    return (
        <>
            <div className='wrapper bar-two'>
                <ul className='categories'>
                    <li>Shop</li>
                    <li>Promo</li>
                    <li>About</li>
                    <li>Blog</li>
                </ul>
                <div className='search'>
                    <TextField id="outlined-basic" label="Search" variant="outlined" fullWidth />
                </div>
                <div className='icons'>
                    <div className="favorite"><FontAwesomeIcon icon={faHeart} /></div>
                    <div className="cart"><FontAwesomeIcon icon={faCartShopping} /></div>
                    <div className="profile"><FontAwesomeIcon icon={faUser} /></div>
                    <div className="notification"><FontAwesomeIcon icon={faBell} /></div>
                </div>
            </div>
        </>
    );
}