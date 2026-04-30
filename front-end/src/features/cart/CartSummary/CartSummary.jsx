import { useContext, useState } from 'react';
import { CenteredContent } from '../../../shared/ui/CenteredContent/CenteredContent';
import { FullWidthButton } from '../../../shared/ui/FullWidthButton/FullWidthButton';
import { CurrencyContext } from '../../../contexts/CurrencyContext';
import { CURRENCIES, CURRENCY_SIGN } from '../../../constants/currencies';
import CAR_ICON from '../../../assets/delivery.svg';
import styles from './CartSummary.module.css';

export function CartSummary({ products }) {
  const [currency] = useContext(CurrencyContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const deliveryCosts = {
    [CURRENCIES.USD]: 10,
    [CURRENCIES.PLN]: 49,
  };

  const minSumsForFreeDelivery = {
    [CURRENCIES.USD]: 100,
    [CURRENCIES.PLN]: 100,
  };

  const deliveryCost = deliveryCosts[currency];
  const minSumForFreeDelivery = minSumsForFreeDelivery[currency];
  const currencySign = CURRENCY_SIGN[currency];

  let sum = 0;

  products.forEach((product) => {
    sum += currency === CURRENCIES.PLN ? product.pricePLN : product.priceUSD;
  });

  const totalCost = sum > minSumForFreeDelivery ? sum : sum + deliveryCost;
  const isCartEmpty = products.length === 0;

  return (
    <CenteredContent>
      <aside className={styles.cartSummary}>
        <h2>Podsumowanie</h2>

        <div className={styles.cartRow}>
          <p>Wartość produktów</p>
          <p>
            {sum} {currencySign}
          </p>
        </div>

        <div className={styles.cartRow}>
          <p>Koszt dostawy</p>
          <p>
            {isCartEmpty || sum > minSumForFreeDelivery ? 0 : deliveryCost}{' '}
            {currencySign}
          </p>
        </div>

        <div className={`${styles.cartRow} ${styles.cartSummaryRow}`}>
          <p>Do zapłaty</p>
          <p>
            {isCartEmpty ? 0 : totalCost} {currencySign}
          </p>
        </div>

        <FullWidthButton
          isBlack={true}
          disabled={isCartEmpty}
          onClick={() => setIsModalOpen(true)}
        >
          Do kasy
        </FullWidthButton>

        <div className={styles.deliveryInfo}>
          <img src={CAR_ICON} alt='' />
          <p>
            Darmowa dostawa od {minSumForFreeDelivery} {currencySign}
          </p>
        </div>
      </aside>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <p className={styles.modalMini}>Demo aplikacji</p>
            <h3>Proces płatności nie jest aktywny</h3>
            <p>Finalizacja zamówienia jest obecnie w przygotowaniu.</p>

            <button type='button' onClick={() => setIsModalOpen(false)}>
              Rozumiem
            </button>
          </div>
        </div>
      )}
    </CenteredContent>
  );
}
