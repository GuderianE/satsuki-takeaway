import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../actions/basketActions';

export const TakeAwayMenuCard = ({item}) => {
    const dispatch = useDispatch();
    return (
        <div>
            <img src={item.images} alt="Lorem Picsum"/>
            <div>{item.name}</div>
            <div>{item.price.price}</div>
            <button onClick={() => dispatch(addItem(item))}>add to basket</button>
        </div>
    );
};