import { CartSummary } from '../../features/cart/CartSummary/CartSummary';
import { CartProductsList } from '../../features/cart/CartProductsList/CartProductsList';
import { FlexContainer } from '../../shared/ui/FlexContainer/FlexContainer';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export function Cart() {
  const [cartItems] = useContext(CartContext);

  return (
    <FlexContainer>
      <CartProductsList products={cartItems} />
      <CartSummary products={cartItems} />
    </FlexContainer>
  );
}
