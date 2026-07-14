import './styles/theme.css';
import './styles/globals.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage } from './views/MainPage/MainPage.jsx';
import { Favourites } from './views/Favourites/Favourites.jsx';
import { Cart } from './views/Cart/Cart.jsx';
import { ProductsList } from './views/ProductsList/ProductsList.jsx';
import { ProductDetails } from './views/ProductDetails/ProductDetails.jsx';
import { Layout } from './layout/Layout/Layout.jsx';
import { mainPageLoader } from './api/mainPageLoader.js';
import { productListLoader } from './api/productListLoader.js';
import { productLoader } from './api/productLoader.js';
import { addProductToFavourites } from './api/addProductToFavouritesAction.js';
import { favouritesLoader } from './api/favouritesLoader.js';
import { deleteFavouriteAction } from './api/deleteFavouriteAction.js';
import { AuthProvider } from './contexts/AuthProvider.jsx';
import { Login } from './views/Auth/Login/Login.jsx';
import { Register } from './views/Auth/Register/Register.jsx';

const router = createBrowserRouter([
  {
    path: '/add-to-favourites/:productId',
    action: addProductToFavourites,
  },
  {
    path: '/delete-from-favourites/:favouriteId',
    action: deleteFavouriteAction,
  },
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/ulubione',
        element: <Favourites />,
        loader: favouritesLoader,
      },
      {
        path: '/koszyk',
        element: <Cart />,
      },
      {
        path: '/:gender?',
        element: <MainPage />,
        loader: mainPageLoader,
      },
      {
        path: '/:gender/:category/:subcategory?',
        element: <ProductsList />,
        loader: productListLoader,
      },
      {
        path: '/:gender/:category/:subcategory/:productId',
        element: <ProductDetails />,
        loader: productLoader,
      },
    ],
  },
]);

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
