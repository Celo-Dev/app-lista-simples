import { useReducer } from 'react';
import { sha256 } from 'react-native-sha256';

const initialState = [];

function reducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return [...state, action.item];
        case 'REMOVE':
            return state.filter(item=>{
                return item.id !== action.id
            })
        default:
            return state;
    }
}

export default function useMarketList() {
    const [state, dispatch] = useReducer(reducer, initialState);

    async function addItem (title) {
        const hashId = await sha256(title)
        dispatch({
            type: 'ADD',
            item: {
                id: hashId,
                title: title
            }
        })
    }

    function removeItem (id) {
        dispatch({
            type: 'REMOVE',
            id: id
        })
    }

    return [state, addItem, removeItem]
}