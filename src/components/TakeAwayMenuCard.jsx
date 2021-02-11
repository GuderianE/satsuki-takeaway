import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../actions/basketActions';

export const TakeAwayMenuCard = (item) => {
    const dispatch = useDispatch();
    console.log(item);
    return (
        <div>
            <div>{item.item.name}</div>
            <div>{item.item.price.price}</div>
            <button onClick={() => dispatch(addItem(item))}>add to basket</button>
        </div>
    );
};