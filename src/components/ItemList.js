import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';
import useFilteredItems from '../hooks/useFilteredItems';

const ItemList = () => {
  const items = useSelector((state) => state.items.items);
  const filter = useSelector((state) => state.items.filter);
  
  const { filteredItems } = useFilteredItems(items, filter);

  return (
    <div>
      <div className="item-list" >
        {filteredItems.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </div>
       </div>
  );
};

export default ItemList;
