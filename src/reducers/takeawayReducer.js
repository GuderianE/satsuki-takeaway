
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
            console.log("payload", action.payload)
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case 'DELETE_ITEM':
            // const updatedItems = 
            return "delete stuff"
        case 'BUY_ITEM':
            return "You bought the Item"
        case 'EMTPY_BASKET':
            return state = []
        default:
            return state
    }
}