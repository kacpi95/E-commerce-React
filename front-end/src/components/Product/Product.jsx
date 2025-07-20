import { products } from './MainPage';

export function Product() {
  const { productName } = products;

  return <p>{productName}</p>;
}
