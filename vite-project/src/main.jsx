import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './utils/Store.js';

import './index.css';
import App from './App.jsx';
import Home from './components/Home';
import BrowseBooks from './components/BrowseBooks';
import BookDetails from './components/BookDetails';
import AddBook from './components/AddBook';
import NotFound from './components/NotFound';

// Create the router
const router = createBrowserRouter([
  {
    path: "/", // Routes that include Navbar
    element: <App />, // App wraps Navbar and uses Outlet
    children: [
      { path: "/", element: <Home /> },
      { path: "/books", element: <BrowseBooks /> },
      { path: "/books/:category", element: <BrowseBooks /> },
      { path: "/book/:id", element: <BookDetails /> },
      { path: "/add-book", element: <AddBook /> },
    ],
  },
  {
    path: "*", 
    element: <NotFound />, // NotFound directly rendered without App
  },
]);

// Render the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);