import { CenteredContent } from '../CenteredContent/CenteredContent';
import { FullWidthButton } from '../FullWidthButton/FullWidthButton';
import CAR_ICON from '../../assets/delivery.svg';

export function CartSummary({ products }) {
  return (
    <CenteredContent>
      <div>
        <h2>Podsumowanie</h2>
        <div>
          <p>Wartość produktów</p>
          <p>398zł</p>
        </div>
        <div>
          <p>Koszt dostawy:</p>
          <p>49zł</p>
        </div>
        <div>
          <p>Do zapłaty:</p>
          <p>447zł</p>
        </div>
        <FullWidthButton>Do kasy</FullWidthButton>
        <div>
          <img src={CAR_ICON} />
          <p>Darmowa dostawa od 500zł</p>
        </div>
      </div>
    </CenteredContent>
  );
}
