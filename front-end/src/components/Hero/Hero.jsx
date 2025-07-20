import { CenteredContent } from '../CenteredContent/CenteredContent';
import style from './Hero.module.css';

export function Hero({ heroImage }) {
  return (
    <div
      className={style.hero}
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <CenteredContent>
        <div className={style.contentWrapper}>
          <h2>Letnie promocje do -70%</h2>
          <p>Tylko najlepsze okazje!</p>
          <button>Sprawdź produkty</button>
        </div>
      </CenteredContent>
    </div>
  );
}
