import { CartProduct } from '../CartProduct/CartProduct';
import { CenteredContent } from '../CenteredContent/CenteredContent';
import styles from './CartProductsList.module.css';

export function CartProductsList({ products }) {
  return (
    <CenteredContent>
      <div className={styles.cardsList}>
        <h2>Ulubione</h2>
        <div>
          {products.map((product) => {
            return <CartProduct key={product.id} product={product} />;
          })}
        </div>
      </div>
    </CenteredContent>
  );
}
