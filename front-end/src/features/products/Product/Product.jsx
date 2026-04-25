import { Link, useFetcher } from 'react-router-dom';

import { ENDPOINT_TO_PATH_MAPPING } from '../../../constants/api';
import { Price } from '../../../shared/ui/Price/Price';
import styles from './Product.module.css';

export function Product({ product }) {
  const { Form } = useFetcher();
  const firstPhotoUrl = product?.photos?.[0]?.url;

  return (
    <Link
      to={`/${ENDPOINT_TO_PATH_MAPPING[product.gender]}/${product.category}/${product.subcategory}/${product.id}`}
      className={styles.product}
    >
      <div className={styles.imageBox}>
        <img src={firstPhotoUrl} alt={product.productName} />

        <Form
          onClick={(e) => e.stopPropagation()}
          method='POST'
          action={`/add-to-favourites/${product.id}`}
        >
          <button
            className={styles.favouriteButton}
            type='submit'
            aria-label='Dodaj do ulubionych'
          >
            <span className={styles.heart}></span>
          </button>
        </Form>
      </div>

      <div className={styles.productInfo}>
        <h3>{product.productName}</h3>
        <p className={styles.category}>{product.subcategory}</p>
        <p className={styles.price}>
          <Price product={product} />
        </p>
      </div>
    </Link>
  );
}
