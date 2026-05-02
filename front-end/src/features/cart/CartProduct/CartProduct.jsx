import { useContext } from 'react';
import { Price } from '../../../shared/ui/Price/Price';
import { CartContext } from '../../../contexts/CartContext';
import REMOVE_IMG from '../../../assets/remove.svg';
import styles from './CartProduct.module.css';
import { getImageUrl } from '../../../utils/getImageUrl';

export function CartProduct({ product }) {
  const price = <Price product={product} />;
  const firstPhotoUrl = getImageUrl(product?.photos?.[0]?.url);
  const [, , removeProductCart] = useContext(CartContext);

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
          <button type='button' onClick={() => removeProductCart(product.id)}>
            <img src={REMOVE_IMG} alt='' />
            Usuń
          </button>
        </div>
      </div>
    </div>
  );
}
