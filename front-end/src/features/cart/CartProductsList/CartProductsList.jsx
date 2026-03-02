import { CartProduct } from '../../cart/CartProduct/CartProduct';
import { CenteredContent } from '../../../shared/ui/CenteredContent/CenteredContent';
import styles from './CartProductsList.module.css';

export function CartProductsList({ products }) {
  return (
    <CenteredContent>
      <div className={styles.cardsList}>
        <h2>Ulubione</h2>
        <div>
          {products.map((product, index) => {
            return (
              <CartProduct key={`${product.id}-${index}`} product={product} />
            );
          })}
        </div>
      </div>
    </CenteredContent>
  );
}
