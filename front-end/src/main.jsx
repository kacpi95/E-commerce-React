import './styles/theme.css';
import './styles/globals.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from 'react-router-dom';
import { MainPage } from './views/MainPage/MainPage.jsx';
import { Favourites } from './views/Favourites/Favourites.jsx';
import { Cart } from './views/Cart/Cart.jsx';
import { ProductsList } from './views/ProductsList/ProductsList.jsx';
import { ProductDetails } from './views/ProductDetails/ProductDetails.jsx';
import { Layout } from './components/Layout/Layout.jsx';

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: '/ulubione',
        element: <Favourites />,
      },
      {
        path: '/koszyk',
        element: <Cart />,
      },
      {
        path: '/:gender',
        element: <MainPage />,
        loader: ({ params }) => {
          const PATH_TO_ENDPOINT_MAPPING = {
            kobieta: 'women',
            mezczyzna: 'men',
            dziecko: 'children',
          };

          const backEndPath = PATH_TO_ENDPOINT_MAPPING[params.gender];
          if (backEndPath) {
            return fetch(`http://localhost:3000/${backEndPath}`);
          } else {
            return redirect('/kobieta');
          }
        },
      },
    ],
  },

  {
    path: '/productsList',
    element: <ProductsList />,
  },
  {
    path: '/productDetails',
    element: <ProductDetails />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
