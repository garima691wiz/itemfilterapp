import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from '../features/itemsSlice';
import ItemList from './ItemList';

const mockStore = configureStore({
  reducer: {
    items: itemsReducer,
  },
  preloadedState: {
    items: {
      items: ['apple', 'banana', 'grape'],
      filter: '',
      currentPage: 1,
    },
  },
});

test('renders a list of items', () => {
  render(
    <Provider store={mockStore}>
      <ItemList />
    </Provider>
  );

  // Expect to find the items in the list
  expect(screen.getByText('apple')).toBeInTheDocument();
  expect(screen.getByText('banana')).toBeInTheDocument();
  expect(screen.getByText('grape')).toBeInTheDocument();
});
