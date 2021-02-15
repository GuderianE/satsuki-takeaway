
// export const ACTION = {
//     ADD_ITEM: 'add-item',
//     DELETE_ITEM: 'delete-item',
//     EMTPY_BASKET: 'empty-basket',
//     BUY_ITEM: 'buy-items'
// }
const initialState = {
    items: []
}

export const takeawayReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
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
        case 'DECREASE_ITEM':
            return {
                ...state,
                items: state.items.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty > 1 ? item.qty - 1 : item.qty = 1 } : { ...item }
                )
            }
        case 'DELETE_ITEM':
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload)
            }
        case 'EMPTY_BASKET':
            return {
                ...state,
                items: []
            }
        default:
            return state
    }
}