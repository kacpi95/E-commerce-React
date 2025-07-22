import { CartProductList } from '../CartProductsList/CartProductsList';
import { CenteredContent } from '../CenteredContent/CenteredContent';
import styles from './FlexContainer.module.css';

export function FlexContainer({ products }) {
  return (
    <CenteredContent>
      <div className={styles.cardsList}>
        <h2>Ulubione</h2>
        <div>
          {products.map((product) => {
            return <CartProductList key={product.id} product={product} />;
          })}
        </div>
      </div>
    </CenteredContent>
  );
}
