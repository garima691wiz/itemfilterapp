import { useMemo } from 'react';

const useFilteredItems = (items, filter) => {
  const filteredItems = useMemo(() => {
    return items.filter(item => item.toLowerCase().includes(filter.toLowerCase()));
  }, [items, filter]);

  return { filteredItems };
};

export default useFilteredItems;
