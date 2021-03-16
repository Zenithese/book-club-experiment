import React, { useState, useEffect, useReducer } from 'react';
import Cover from './cover';
import Page from './page';
import BackCover from './back_cover';
import { pagesArrayReducer } from './usePagesArrayReducer';

export default function SessionBook() {

    const [sessionOpen, setSessionOpen] = useState(false)
    const [position, setPosition] = useState(0)
    const [bookClosed, setBookClosed] = useState(false)
    const [defaultZ, setDefaultZ] = useState(0)
    // const [pagesArray, setPagesArray] = useState([...Array(5)].map((_, i) => <Page position={position} setPosition={setPosition} pageNum={6 - i} secondPageNum={i + 1} />))
    
    // const [state, dispatch] = useReducer(pagesArrayReducer, [...Array(5)].map((_, i) => <Page position={position} setPosition={setPosition} pageNum={6 - i} secondPageNum={i + 1} />));

    useEffect(() => console.log(position))

    const makePages = () => {
        const pages = []
        // pages.unshift()
        for (let i = 4; i < 10; i += 2) {
            pages.unshift(<Page position={position} setPosition={setPosition} pageNum={i} defaultZ={defaultZ} setDefaultZ={setDefaultZ} />)
        }
        // pages.unshift()
        return pages
    }

    return (
        <div className={sessionOpen ? `session-cover session-cover-open ${bookClosed ? "back-of-book" : ""}` : "session-cover"}>
            <BackCover position={position} setPosition={setPosition} setBookClosed={setBookClosed} pageNum={10} defaultZ={defaultZ} setDefaultZ={setDefaultZ}/>
            {makePages()}
            <Cover position={position} setPosition={setPosition} setSessionOpen={setSessionOpen} defaultZ={defaultZ} setDefaultZ={setDefaultZ}/>
        </div>
    )
}