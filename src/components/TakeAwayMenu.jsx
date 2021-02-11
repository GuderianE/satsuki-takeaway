import React from 'react';
import { TakeAwayMenuCard } from '../components/TakeAwayMenuCard';
import {useSelector} from 'react-redux';
import { menu } from '../dummyData.json';

export const TakeAwayMenu = () => {
    const state = useSelector(state => state.takeawayReducer.items)
    console.log(state);
    const menuItems = Object.values(menu);
    return menuItems.map((category) =>
        category.map((item) => <TakeAwayMenuCard key={item.id} item={item} />)
    );
};

