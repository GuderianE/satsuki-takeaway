import {useDispatch} from 'react-redux';
import React from 'react';
import {addItem} from '../actions/basketActions';
import dummyData from '../dummyData.json';

export const TakeAwayMenu = () => {
const dispatch = useDispatch();

const {menu} = dummyData;

// const submitHandler = () => {
//     dispatch(addItem(menu))
// }
    return (
        <div>
            <button onClick={() => dispatch(addItem(menu))}></button>
        </div>
    )
}
