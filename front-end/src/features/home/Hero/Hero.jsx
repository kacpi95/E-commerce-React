import { CenteredContent } from '../../../shared/ui/CenteredContent/CenteredContent';
import { FullWidthButton } from '../../../shared/ui/FullWidthButton/FullWidthButton';
import { useParams, useNavigate } from 'react-router-dom';
import style from './Hero.module.css';

export function Hero({ heroImage }) {
  const { gender } = useParams;
  const navigate = useNavigate();

  const currentGender = gender || 'kobieta';
  return (
    <div
      className={style.hero}
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <CenteredContent>
        <div className={style.contentWrapper}>
          <h2>Letnie promocje do -70%</h2>
          <p>Tylko najlepsze okazje!</p>
          <FullWidthButton onClick={() => navigate(`/${currentGender}/odziez`)}>
            Sprawdź produkty
          </FullWidthButton>
        </div>
      </CenteredContent>
    </div>
  );
}
