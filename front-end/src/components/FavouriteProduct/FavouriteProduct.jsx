import REMOVE_IMG from '../../assets/remove.svg';
import BAG_ICON from '../../assets/bag.svg';

export function FavouriteProduct({ product }) {
  return (
    <div>
      <img src={`${product.photos[0]}`} />
      <div>
        <div>
          <h3>
            {product.brnad} {product.productName}
          </h3>
          <p>
            <span>Cena: </span>
            {product.price}zł
          </p>
        </div>
        <div>
          <button>
            <img src={REMOVE_IMG} />
            Usuń
          </button>
          <button>
            <img src={BAG_ICON} />
            Dodaj do koszyka
          </button>
        </div>
      </div>
    </div>
  );
}
