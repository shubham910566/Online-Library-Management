import { createSlice, configureStore } from '@reduxjs/toolkit';
import booksData from './Data';

const booksSlice = createSlice({
  name: 'books',
  initialState: booksData, // Load JSON data here
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
  }
});

export const { addBook, removeBook } = booksSlice.actions;

const store = configureStore({
  reducer: {
    books: booksSlice.reducer
  }
});

export default store