import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
export const ItemCard = ({ name, description, image }: any) => {
    const cardRef: React.Ref<any> = useRef<HTMLDivElement>();
    const [cardHeight, setCardHeight] = useState(Number);
    useEffect(() => {
        if (cardRef?.current) {
            const height = cardRef?.current?.offsetWidth * 640 / 400;
            // console.log(height);
            setCardHeight(height);
        }
    })
    return (
        <>
            <div className='item-card' ref={cardRef} style={{ height: cardHeight }}>
                <img src={image} alt={name}></img>
                <div className='content'>
                    <div className='name'>{name}</div>
                    <div className='description'>{description}</div>
                    <div className='button'><FontAwesomeIcon icon={faCircleArrowRight} fontSize="40px" color='#F86338' /></div>

                </div>
            </div>
        </>
    )
}