import { useParams, useNavigate } from 'react-router-dom';

import { CenteredContent } from '../../../shared/ui/CenteredContent/CenteredContent';
import { FullWidthButton } from '../../../shared/ui/FullWidthButton/FullWidthButton';
import style from './Hero.module.css';

export function Hero({ heroImage }) {
  const { gender } = useParams();
  const navigate = useNavigate();

  const currentGender = gender || 'kobieta';

  return (
    <CenteredContent>
      <section
        className={style.hero}
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className={style.contentWrapper}>
          <p className={style.eyebrow}>Limitowana kolekcja</p>
          <h2>Styl dopracowany w każdym detalu.</h2>
          <p>
            Odkryj nową kolekcję ubrań i dodatków stworzoną z myślą o codziennym
            komforcie.
          </p>

          <div className={style.actions}>
            <FullWidthButton
              onClick={() => navigate(`/${currentGender}/odziez`)}
            >
              Sprawdź produkty
            </FullWidthButton>
            <button className={style.secondaryButton} type='button'>
              Lookbook
            </button>
          </div>
        </div>
      </section>
    </CenteredContent>
  );
}
