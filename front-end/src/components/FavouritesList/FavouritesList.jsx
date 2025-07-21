import { CenteredContent } from '../CenteredContent/CenteredContent';

export function FavouritesList({ products }) {
  return (
    <CenteredContent>
      <h2>Ulubione</h2>
      <div>
        <ul>
          {products.map((product) => {
            return (
              <li>
                <img src='' alt='' />
                <div>
                  <h3>{product.productName}</h3>
                  <p>Cena {product.PricePLN} zł</p>
                  <div>
                    <p>usuń</p>
                    <p>Dodaj do koszyka</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </CenteredContent>
  );
}
