import { Outlet, useNavigation } from 'react-router-dom';
import { useState } from 'react';

import { Footer } from '../Footer/Footer';
import { MainMenu } from '../MainMenu/MainMenu';
import { Logo } from '../Logo/Logo';
import { CurrencySelector } from '../../shared/ui/CurrencySelector/CurrencySelector';
import { IconMenu } from '../../layout/IconMenu/IconMenu';
import { TopBar } from '../TopBar/TopBar';
import { CategoryMenu } from '../../features/products/CategoryMenu/CategoryMenu';
import { MainContent } from '../../shared/ui/MainContent/MainContent';
import { CurrencyContext } from '../../contexts/CurrencyContext';
import { CURRENCIES } from '../../constants/currencies';
import { CartContext } from '../../contexts/CartContext';
import style from './Layout.module.css';

export function Layout() {
  const navigation = useNavigation();

  const [currency, setCurrency] = useState(
    localStorage['selected_currency'] || CURRENCIES.PLN,
  );

  const [cartItems, setCartItems] = useState(() => {
    return localStorage['cart_products']
      ? JSON.parse(localStorage['cart_products'])
      : [];
  });

  function addProductCart(product) {
    setCartItems((previousCartItems) => {
      const newState = [...previousCartItems, product];
      localStorage['cart_products'] = JSON.stringify(newState);
      return newState;
    });
  }

  function removeProductCart(productId) {
    setCartItems((previousCartItems) => {
      const index = previousCartItems.findIndex((p) => p.id === productId);
      if (index === -1) return previousCartItems;

      const newState = [
        ...previousCartItems.slice(0, index),
        ...previousCartItems.slice(index + 1),
      ];
      localStorage['cart_products'] = JSON.stringify(newState);
      return newState;
    });
  }

  return (
    <CartContext.Provider
      value={[cartItems, addProductCart, removeProductCart]}
    >
      <CurrencyContext.Provider value={[currency, setCurrency]}>
        {navigation.state === 'loading' && (
          <div className={style.globalLoader}>
            <h2>Clothiq</h2>

            <p>Waking up server... please wait</p>
          </div>
        )}

        <div className={style.wrapper}>
          <MainContent>
            <TopBar>
              <Logo />
              <MainMenu />
              <div className={style.headerActions}>
                <CurrencySelector />
                <IconMenu />
              </div>
            </TopBar>
            <CategoryMenu />
            <Outlet />
          </MainContent>
        </div>
        <Footer />
      </CurrencyContext.Provider>
    </CartContext.Provider>
  );
}
