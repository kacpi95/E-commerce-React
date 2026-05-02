import { useContext } from 'react';
import { Link, useFetcher } from 'react-router-dom';

import { Price } from '../../../shared/ui/Price/Price';
import { CartContext } from '../../../contexts/CartContext';
import { ENDPOINT_TO_PATH_MAPPING } from '../../../constants/api';
import REMOVE_IMG from '../../../assets/remove.svg';
import styles from './FavouriteProduct.module.css';
import { getImageUrl } from '../../../utils/getImageUrl';

export function FavouriteProduct({ favourite }) {
  const product = favourite.product;
  const { Form } = useFetcher();
  const [, addProductCart] = useContext(CartContext);

  const firstPhotoUrl = getImageUrl(product?.photos?.[0]?.url);

  const productUrl = `/${ENDPOINT_TO_PATH_MAPPING[product.gender]}/${product.category}/${product.subcategory}/${product.id}`;

  return (
    <article className={styles.favouriteProduct}>
      <Link to={productUrl} className={styles.imageLink}>
        <img src={firstPhotoUrl} alt={product.productName} />
      </Link>

      <div className={styles.favouriteProductInfo}>
        <div>
          <p className={styles.brand}>{product.brand || 'Clothiq'}</p>
          <h3>
            <Link to={productUrl}>{product.productName}</Link>
          </h3>
          <p className={styles.category}>{product.subcategory}</p>
        </div>

        <p className={styles.price}>
          <Price product={product} />
        </p>

        <div className={styles.buttonRow}>
          <Form
            action={`/delete-from-favourites/${favourite.id}`}
            method='DELETE'
          >
            <button className={styles.removeButton} type='submit'>
              <img src={REMOVE_IMG} alt='' />
              Usuń
            </button>
          </Form>

          <button
            className={styles.cartButton}
            type='button'
            onClick={() => {
              addProductCart(product);
            }}
          >
            Dodaj do koszyka
          </button>
        </div>
      </div>
    </article>
  );
}
