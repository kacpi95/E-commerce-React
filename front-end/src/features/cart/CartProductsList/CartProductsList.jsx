import { CartProduct } from '../../cart/CartProduct/CartProduct';
import { CenteredContent } from '../../../shared/ui/CenteredContent/CenteredContent';
import styles from './CartProductsList.module.css';

export function CartProductsList({ products }) {
  return (
    <CenteredContent>
      <section className={styles.cardsList}>
        <div className={styles.header}>
          <p>Twoje zamówienie</p>
          <h2>Koszyk</h2>
          <span>Produkty dodane do koszyka są gotowe do podsumowania.</span>
        </div>

        {products.length === 0 ? (
          <div className={styles.empty}>
            <h3>Koszyk jest pusty</h3>
            <p>Dodaj produkty do koszyka, aby zobaczyć je w tym miejscu.</p>
          </div>
        ) : (
          <div className={styles.products}>
            {products.map((product, index) => {
              return (
                <CartProduct key={`${product.id}-${index}`} product={product} />
              );
            })}
          </div>
        )}
      </section>
    </CenteredContent>
  );
}
