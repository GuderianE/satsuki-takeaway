import React from 'react';
import { useDispatch } from 'react-redux';
import {search} from '../actions/searchActions';

export const SearchBar = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <form>
            <input type="text" onChange={(e) => dispatch(search(e.target.value))} />
            </form>
            <button onClick={() => dispatch(search("appetizer"))}>Appetizer</button>
            <button onClick={() => dispatch(search("sushi"))}>Sushi</button>
            <button onClick={() => dispatch(search("hot-dishes"))}>Hot-Dishes</button>
            <button onClick={() => dispatch(search("desserts"))}>Desserts</button>
            <button onClick={() => dispatch(search("drinks"))}>Drinks</button>
        </div>
    )
}
