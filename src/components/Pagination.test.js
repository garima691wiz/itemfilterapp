import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from '../features/itemsSlice';
import Pagination from './Pagination';

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

test('renders pagination buttons and handles page change', () => {
  render(
    <Provider store={mockStore}>
      <Pagination totalItems={10} itemsPerPage={5} />
    </Provider>
  );

  // Check the buttons are rendered
  expect(screen.getByText('1')).toBeInTheDocument();
  expect(screen.getByText('2')).toBeInTheDocument();

  // Simulate clicking the second page
  fireEvent.click(screen.getByText('2'));

  // Verify that the current page is updated in the state
  expect(mockStore.getState().items.currentPage).toBe(2);
});
