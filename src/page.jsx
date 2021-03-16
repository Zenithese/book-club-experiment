import React, { useState, useEffect } from 'react';

export default function Page({ position, setPosition, pageNum, defaultZ, setDefaultZ }) {

    const [flipped, setFlipped] = useState(false)

    useEffect(() => {
        if (!flipped) {
            setDefaultZ(pageNum)
        }
    }, [flipped])

    const handleClick = () => {
        if (position > pageNum) return
        setFlipped(!flipped)
        if (!flipped) {
            setPosition(position + 2)
        } else {
            setPosition(position - 2)
        }
    }

    return (
        <div 
            style={{ zIndex: flipped ? pageNum : defaultZ}}
        className={flipped ? "flipped-page page" : "page"} 
        onClick={handleClick}>
            <div className="front-back-container">
                <div className="front page-color">
                    <h1>Page {pageNum - 3}</h1>
                </div>
                <div className="back page-color">
                    <h1>Page {pageNum - 2}</h1>
                </div>
            </div>
        </div>
    )
}