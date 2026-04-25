import { CenteredContent } from '../../../shared/ui/CenteredContent/CenteredContent';
import { Product } from '../../../features/products/Product/Product';
import styles from './Products.module.css';

export function Products({ products = [], headerText, subText }) {
  return (
    <section className={styles.section}>
      <CenteredContent>
        <div className={styles.header}>
          <div>
            <h2>{headerText}</h2>
            {subText && <p>{subText}</p>}
          </div>
        </div>

        <div className={styles.productsWrapper}>
          {products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </CenteredContent>
    </section>
  );
}
