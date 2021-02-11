import React from 'react';
import { useSelector } from "react-redux";

export const Basket = () => {
    const state = useSelector(state => state.takeawayReducer.items)
    console.log(state);
    return (
            (state.map((item) => {
                return (
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                    </div>
                )
            }))
    )
}
