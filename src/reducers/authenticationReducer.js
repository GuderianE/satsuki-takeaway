import { ACTION } from '../actions/authenticationTypes';
import { nanoid } from 'nanoid';

const id = nanoid();

const initialState = {
    users: [ {name: 'Elias', email: 'theguderian@gmail.com', password: '12345678'}, {name: 'Amit', email: 'amit@gmail.com', password: '11111111'}]
}

export const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.ADD_USER:
            console.log('paylaod', action.payload)
                return {
                    ...state,
                    users: [...state.users, { ...action.payload.data, id: id }],
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