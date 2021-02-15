import {ACTION} from '../actions/authenticationTypes';

const initialState = {
    items: []
}

export const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.ADD_USER:
            const exist = state.items.find((item) => item.id === action.payload.id);
            console.log('exist is false', action.payload);
            if (!exist) {
                return {
                    ...state,
                    items: [...state.items, { ...action.payload, qty: 1 }],
                };
            } else
            console.log('exist is true', action.payload);
                return {
                    ...state,
                    items: state.items.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, qty: item.qty + 1 }
                            : { ...item }
                    ),
                };
        case ACTION.UPDATE_USER:
            return {
                ...state,
                items: state.items.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty > 1 ? item.qty - 1 : item.qty = 1 } : { ...item }
                )
            }
        case ACTION.DELETE_USER:
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload)
            }
        default:
            return state
    }
}