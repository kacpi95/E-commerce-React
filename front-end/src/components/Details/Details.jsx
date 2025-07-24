import { FullWidthButton } from '../FullWidthButton/FullWidthButton';
import styles from './Details.module.css';
import DELIVERY_ICON from '../../assets/delivery.svg';
import RETURN_ICON from '../../assets/return.svg';
import { Accordion } from '../Accordion/Accordion';

export function Details({ product }) {
  const items = [
    {
      title: 'Opis produktu',
      content: product.maintenanceInfo,
    },
  ];
  return (
    <div className={styles.details}>
      <h2>{product.brand}</h2>
      <p className={styles.productName}>{product.productName}</p>
      <p className={styles.price}>{product.pricePLN} zł</p>
      <FullWidthButton isBlack={true}>Dodaj do koszyka</FullWidthButton>
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
