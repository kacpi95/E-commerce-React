import { CenteredContent } from '../CenteredContent/CenteredContent';
import { Product } from '../Product/Product';

export function Bestsellers({ products }) {
  return (
    <CenteredContent>
      <h2>Sprawdź nasze bestsellery</h2>
      <div>
        {products.map((product) => {
          <Product key={product.id} product={product}></Product>;
        })}
      </div>
    </CenteredContent>
  );
}
