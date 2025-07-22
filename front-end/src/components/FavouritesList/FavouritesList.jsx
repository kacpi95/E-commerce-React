import { CenteredContent } from '../CenteredContent/CenteredContent';
import { FavouriteProduct } from '../FavouriteProduct/FavouriteProduct';

export function FavouritesList({ products }) {
  return (
    <CenteredContent>
      <div>
        <h2>Ulubione</h2>
        <div>
          {products.map((product) => {
            return <FavouriteProduct key={product.id} product={product} />;
          })}
        </div>
      </div>
    </CenteredContent>
  );
}
