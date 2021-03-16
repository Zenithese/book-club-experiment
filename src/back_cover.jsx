import React, { useState, useEffect } from 'react';

export default function BackCover({ position, setPosition, setBookClosed, pageNum, defaultZ, setDefaultZ  }) {

    const [flipped, setFlipped] = useState(false)

    useEffect(() => {
        if (!flipped) {
            setDefaultZ(pageNum)
        }
    }, [flipped])

    const handleClick = () => {
        setFlipped(!flipped)
        setBookClosed(bookClosed => !bookClosed)
        if (!flipped) {
            setPosition(position + 2)
        } else {
            setPosition(position - 2)
        }
    };

    return (
        <div 
            style={{ zIndex: flipped ? pageNum : defaultZ }}
        className={flipped ? "flipped-back-cover back-cover" : "back-cover"} 
        onClick={handleClick}>
            <div className="front-back-container">
                <div className="front back-cover-color">
                    <h1>end</h1>
                </div>
                <div className="back back-cover-color">
                    <h1>blurb</h1>
                </div>
            </div>
        </div>
    )
}