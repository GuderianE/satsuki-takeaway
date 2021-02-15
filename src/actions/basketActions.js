export const addItem = (item) => {
    return {type: 'ADD_ITEM', payload: item}
}

export const deleteItem = (id) => {
    return {type: 'DELETE_ITEM', payload: id}
}

export const emptyBasket = () => {
    return {type: 'EMPTY_BASKET'}
}

export const decreaseItem = (id) => {
    return {type: 'DECREASE_ITEM', payload: id}
}