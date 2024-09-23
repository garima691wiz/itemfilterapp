import { createSlice } from '@reduxjs/toolkit';

const initialItems = [
  'apple', 'banana', 'orange', 'grape', 'mango', 'pineapple', 'strawberry',
  'blueberry', 'blackberry', 'kiwi', 'papaya', 'watermelon', 'peach',
  'pear', 'plum', 'cherry', 'coconut', 'fig', 'date', 'apricot',
  'lime', 'lemon', 'pomegranate', 'tangerine', 'passionfruit',
  'dragonfruit', 'cantaloupe', 'honeydew', 'raspberry', 'cranberry',
  'kiwifruit', 'nectarine', 'persimmon', 'blood orange', 'guava',
  'jackfruit', 'jackdaniels', 'lychee', 'longan', 'soursop',
  'starfruit', 'tamarind', 'quince', 'currant', 'rhubarb',
  'cucumber', 'pumpkin', 'zucchini', 'eggplant', 'sweetpotato',
  'carrot', 'beet', 'radish', 'turnip', 'parsnip',
  'squash', 'pepper', 'tomato', 'corn', 'onion',
  'garlic', 'ginger', 'chili', 'cilantro', 'basil',
  'rosemary', 'thyme', 'sage', 'oregano', 'parsley',
  'chives', 'dill', 'fennel', 'tarragon', 'mustard',
  'arugula', 'spinach', 'kale', 'collard', 'cabbage',
  'broccoli', 'cauliflower', 'brusselsprout', 'asparagus', 'artichoke',
  'celery', 'endive', 'radicchio', 'bokchoy', 'swisschard',
  'beetroot', 'pea', 'bean', 'lentil', 'quinoa',
  'barley', 'rice', 'wheat', 'oats', 'cornmeal'
];

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: initialItems,
    filter: '',
    currentPage: 1, // Add current page to the initial state
  },
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload;
      state.currentPage = 1; // Reset to first page when filter changes
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { setItems, setFilter, setCurrentPage } = itemsSlice.actions;
export default itemsSlice.reducer;
