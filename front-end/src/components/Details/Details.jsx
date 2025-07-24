import { FullWidthButton } from '../FullWidthButton/FullWidthButton';
import styles from './Details.module.css';
import DELIVERY_ICON from '../../assets/delivery.svg';
import ARROW_ICON from '../../assets/arrow.svg';

export function Details({ product }) {
  return (
    <div>
      <h2>{product.brand}</h2>
      <p>{product.productName}</p>
      <p>{product.pricePLN} zł</p>
      <FullWidthButton isBlack={true}>Dodaj do koszyka</FullWidthButton>
      <ul>
        <li>
          <img src={DELIVERY_ICON} />
          Dostawa do 24h
        </li>
        <li>
          <img src={DELIVERY_ICON} />
          Zwrot do 100 dni
        </li>
      </ul>
    </div>
  );
}
