import { useEffect, useReducer } from "react";

export const INCREMENT = "Increment"
export const DECREMENT = "Decrement"

let L = [4,3,2,1]
let R = [5,6,7,8]

export function pagesArrayReducer(state = {}, action) {
    Object.freeze(state);
    let newState, page, length, newWhole = [];
    switch (action.type) {
        case INCREMENT:
            newState = {...state}
            page = newState.right.shift()
            newState.left.unshift(page)
            length = newState.left.length > newState.right.length ? newState.left.length : newState.right.length
            for (let i = 0; i < length; i++) {
                if (newState.left.length) newWhole.unshift(newState.left.shift())
                if (newState.right.length) newWhole.unshift(newState.right.shift())
            }
            newState.whole = newWhole
            return newState
        case DECREMENT:
            newState = {...state}
            page = newState.left.shift()
            newState.right.unshift(page)
            length = newState.left.length > newState.right.length ? newState.left.length : newState.right.length
            for (let i = 0; i < length; i++) {
                if (newState.right.length) newWhole.unshift(newState.right.shift())
                if (newState.left.length) newWhole.unshift(newState.left.shift())
            }
            newState.whole = newWhole
            return newState
        default:
            return state;
    }
}

// export function usePagesArrayReducer(initialState) {
//     const [data, dispatch] = useReducer(pagesArrayReducer, initialState);

//     useEffect(() => {

//     }, []);

//     return data;
// }