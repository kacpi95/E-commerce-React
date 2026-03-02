import { useContext } from 'react';
import { FullWidthButton } from '../../../shared/ui/FullWidthButton/FullWidthButton';
import { Accordion } from '../../../shared/ui/Accordion/Accordion';
import { CartContext } from '../../../contexts/CartContext';
import RETURN_ICON from '../../../assets/return.svg';
import DELIVERY_ICON from '../../../assets/delivery.svg';
import styles from './Details.module.css';

export function Details({ product }) {
  const [, addProductCart] = useContext(CartContext);

  const items = [
    {
      title: 'Opis produktu',
      content: product.description,
    },
    {
      title: 'Wskazówki pielęgnacyjne ',
      content: product.maintenanceInfo,
    },
  ];
  return (
    <div className={styles.details}>
      <h2>{product.brand}</h2>
      <p className={styles.productName}>{product.productName}</p>
      <p className={styles.price}>{product.pricePLN} zł</p>
      <FullWidthButton
        onClick={() => {
          addProductCart(product);
        }}
        isBlack={true}
      >
        Dodaj do koszyka
      </FullWidthButton>
      <ul className={styles.extraInfo}>
        <li>
          <img src={DELIVERY_ICON} />
          Dostawa do 24h
        </li>
        <li>
          <img src={RETURN_ICON} />
          Zwrot do 100 dni
        </li>
      </ul>
      <Accordion items={items} />
    </div>
  );
}
