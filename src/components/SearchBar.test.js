import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from '../features/itemsSlice';
import SearchBar from './SearchBar';

const mockStore = configureStore({
  reducer: {
    items: itemsReducer,
  },
  preloadedState: {
    items: {
      items: [],
      filter: '',
      currentPage: 1,
    },
  },
});

test('dispatches setFilter on input change', () => {
  const store = mockStore;
  render(
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );

  const searchInput = screen.getByPlaceholderText('Search items...');
  fireEvent.change(searchInput, { target: { value: 'apple' } });

  // Expect the state to be updated with the filter value
  expect(store.getState().items.filter).toBe('apple');
});
