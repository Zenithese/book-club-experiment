import React, { useState } from 'react';

export default function Cover({ position, setPosition, setSessionOpen, defaultZ, setDefaultZ }) {

    const [flipped, setFlipped] = useState(false)
    const [backface, setBackface] = useState("")

    const handleClick = () => {
        if (position > 2) return
        setFlipped(!flipped)
        setSessionOpen(sessionOpen => !sessionOpen)
        if (!flipped) {
            setPosition(position + 2)
            setTimeout(() => {
                setBackface("backface")
            }, 150)
            setDefaultZ(2)
        } else {
            setPosition(position - 2)
            setTimeout(() => {
                setBackface("")
            }, 200)
        }
    };

    return (
        <div 
            style={{ zIndex: flipped ? 2 : defaultZ }} 
            id="cover" className={`${backface} ${flipped ? "open-cover cover" : "cover"}`} 
            onClick={handleClick}>
            <h1>Book Club</h1>
        </div>
    )
}