import React, {useEffect, useState} from 'react';
import { TakeAwayMenuCard } from '../components/TakeAwayMenuCard';
import { useSelector, useDispatch } from 'react-redux';
// import { menu } from '../dummyData.json';
import { SearchBar } from './SearchBar';
import {getMenuItems} from '../APIs/apiCalls';
import { getItems } from '../actions/basketActions';

export const TakeAwayMenu = () => {
  const state = useSelector((state) => state.searchReducer);
  const {loading, setLoading} = useState(true);
  const menuItems = useSelector((state) => state.takeawayReducer);
  console.log(menuItems);
  // console.log('state', state);
  const dispatch = useDispatch();
  // const menuItems = Object.values(menu);

  useEffect(() => {
    const fetchMenu = async () => {
      const result = await getMenuItems()
      return dispatch(getItems(result));
    }
    fetchMenu();
    setLoading(false)
  }, [])

  const searchstate = state.toLowerCase().trim();
  const tragetCategory = menuItems.map((category) => {
    /* checks if input has string if true searches for match and returns match only */
    if (state !== '') {
      return category
        .filter(
          (item) =>
            !item.category.search(searchstate) ||
            !item.name.toLowerCase().search(searchstate)
        )
        .map((item) => <TakeAwayMenuCard key={item.id} item={item} />);
    } else {
      return category.map((item) => (
        <TakeAwayMenuCard key={item.id} item={item} />
      ));
    }
  });

  return (
    <>
      <SearchBar />
      <div className='takeawaymenu_container'>{(loading ? <h1>Loading...</h1> : {tragetCategory})}</div>
    </>
  );
};
