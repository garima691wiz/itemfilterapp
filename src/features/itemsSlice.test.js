import itemsReducer, { setItems, setFilter, setCurrentPage } from './itemsSlice';

const initialItems = [
  'apple', 'banana', 'orange', 'grape', 'mango',
  // other items...
];

describe('itemsSlice reducer', () => {
  const initialState = {
    items: initialItems,
    filter: '',
    currentPage: 1,
  };

  it('should return the initial state', () => {
    expect(itemsReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle setItems', () => {
    const newItems = ['item1', 'item2', 'item3'];
    const state = itemsReducer(initialState, setItems(newItems));
    expect(state.items).toEqual(newItems);
  });

  it('should handle setFilter', () => {
    const state = itemsReducer(initialState, setFilter('apple'));
    expect(state.filter).toBe('apple');
  });

  it('should handle setCurrentPage', () => {
    const state = itemsReducer(initialState, setCurrentPage(2));
    expect(state.currentPage).toBe(2);
  });
});
