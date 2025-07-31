import { Link, useFetcher } from 'react-router-dom';
import styles from './Product.module.css';
import { ENDPOINT_TO_PATH_MAPPING } from '../../constants/api';

export function Product({ product }) {
  const { Form } = useFetcher();

  return (
    <Link
      to={`/${ENDPOINT_TO_PATH_MAPPING[product.gender]}/${product.category}/${
        product.subcategory
      }/${product.id}`}
      className={styles.product}
    >
      <img src={product.photos[0]} alt={product.productName} />
      <h3>{product.productName}</h3>
      <p>{product.pricePLN}zł</p>

      <Form
        onClick={(e) => {
          e.stopPropagation();
        }}
        method='POST'
        action={`/add-to-favourites/${product.id}`}
      >
        <button>
          <div className={styles.heart}></div>
        </button>
      </Form>
    </Link>
  );
}
