import { useContext } from 'react';
import { useFetcher } from 'react-router-dom';
import { Price } from '../../../shared/ui/Price/Price';
import { CartContext } from '../../../contexts/CartContext';
import BAG_ICON from '../../../assets/bag.svg';
import REMOVE_IMG from '../../../assets/remove.svg';
import styles from './FavouriteProduct.module.css';

export function FavouriteProduct({ favourite }) {
  const product = favourite.product;
  const { Form } = useFetcher();
  const [, addProductCart] = useContext(CartContext);

  const price = <Price product={product} />;
  const firstPhotoUrl = product?.photos?.[0]?.url;

  return (
    <div className={styles.favouriteProduct}>
      <img src={firstPhotoUrl} alt={product.productName} />
      <div className={styles.favouriteProductInfo}>
        <div className={styles.topRow}>
          <h3>
            {product.brand} {product.productName}
          </h3>
          <p>{price}</p>
        </div>
        <p className={styles.priceRow}>
          <span>Cena: </span>
          {price}
        </p>
        <div className={styles.buttonRow}>
          <Form
            action={`/delete-from-favourites/${favourite.id}`}
            method='DELETE'
          >
            <button type='submit'>
              <img src={REMOVE_IMG} alt='' />
              Usuń
            </button>
          </Form>

          <button
            type='button'
            onClick={() => {
              addProductCart(product);
            }}
          >
            <img src={BAG_ICON} alt='' />
            Dodaj do koszyka
          </button>
        </div>
      </div>
    </div>
  );
}
