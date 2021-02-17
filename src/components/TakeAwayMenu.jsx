import React from 'react';
import { TakeAwayMenuCard } from '../components/TakeAwayMenuCard';
import { useSelector } from 'react-redux';
import { menu } from '../dummyData.json';
import { SearchBar } from './SearchBar';

export const TakeAwayMenu = () => {
    const state = useSelector(state => state.searchReducer);
    console.log('state',state);
    const menuItems = Object.values(menu);
    return (
        <>
            <SearchBar />
            {menuItems.map((category) => {
                if (state !== '') {
                    return category
                        .filter((item) => !item.category.search(state.toLowerCase().trim()) || !item.name.toLowerCase().search(state.toLowerCase().trim()))
                        .map((item) => <TakeAwayMenuCard key={item.id} item={item} />)
                } else {
                    return category.map((item) => (<TakeAwayMenuCard key={item.id} item={item} />)
                    )
                }
            }
            )}

        </>
    )
};

