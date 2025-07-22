import './styles/theme.css';
import './styles/globals.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage } from './views/MainPage/MainPage.jsx';
import { Favourites } from './views/Favourites/Favourites.jsx';
import { Cart } from './views/Cart/Cart.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/favourites',
    element: <Favourites />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
