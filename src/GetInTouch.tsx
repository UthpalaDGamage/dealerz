import React, { useState, useEffect, useRef } from 'react';
export const GetInTouch = ({ image, title, content, readMoreLink }: any) => {
    const compRef: React.Ref<any> = useRef<HTMLDivElement>();
    const [compHeight, setCompHeight] = useState(Number);
    useEffect(() => {
        if (compRef?.current) {
            const height = compRef?.current?.offsetWidth * 720 / 607;
            // console.log(height);
            setCompHeight(height);
        }
    })
    return (
        <>
            <div className='get-in-touch'>
                <div className='left' ref={compRef} style={{ height: compHeight }}>
                    <img src={image || 'https://media.istockphoto.com/photos/dubai-skyline-view-from-the-marasi-marina-in-city-business-bay-area-picture-id1309800132?b=1&k=20&m=1309800132&s=170667a&w=0&h=sHGtpaOULZI0YqBR-hFMkVLLtwLd6fXAGQ15tYy3YQ8='} alt={title}></img>
                </div>
                <div className='right'>
                    <h3 className='title'>Story about
                        Our Brand</h3>
                    <p className='content'>Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company</p>
                    <p className='full-story'>Read Full Story</p>
                </div>
            </div>
        </>
    )
}