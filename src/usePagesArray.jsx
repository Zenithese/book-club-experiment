import React, { useState, useEffect } from 'react';

export default function usePagesArray(array, action) {
    const [pagesArray, setPagesArray] = useState(array);

    useEffect(() => {
        
    }, [])

    return pagesArray;
}