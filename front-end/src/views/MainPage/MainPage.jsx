import { useLoaderData, useParams } from 'react-router-dom';

import { Hero } from '../../features/home/Hero/Hero';
import { Products } from '../../features/products/Products/Products';
import womenHero from '../../assets/women.jpg';
import menHero from '../../assets/men.jpg';
import childrenHero from '../../assets/children.jpg';
import styles from './MainPage.module.css';

const HERO_MAP = {
  kobieta: womenHero,
  mezczyzna: menHero,
  dziecko: childrenHero,
};

export function MainPage() {
  const { bestsellers } = useLoaderData();
  const { gender } = useParams();

  const heroImage = HERO_MAP[gender || 'kobieta'];

  return (
    <>
      <Hero heroImage={heroImage} />

      <section className={styles.benefits}>
        <div className={styles.benefit}>
          <span>✦</span>
          <div>
            <h3>Jakość premium</h3>
            <p>Starannie wybrane materiały i ponadczasowe fasony.</p>
          </div>
        </div>

        <div className={styles.benefit}>
          <span>⛟</span>
          <div>
            <h3>Szybka dostawa</h3>
            <p>Wysyłka zamówień w możliwie najkrótszym czasie.</p>
          </div>
        </div>

        <div className={styles.benefit}>
          <span>◆</span>
          <div>
            <h3>Sprawdzony styl</h3>
            <p>Kolekcje dobrane z myślą o codziennym komforcie.</p>
          </div>
        </div>
      </section>

      <Products
        headerText='Bestsellery'
        subText='Najczęściej wybierane produkty z naszej aktualnej kolekcji.'
        products={bestsellers}
      />

      <section className={styles.clubSection}>
        <div className={styles.clubLeft}>
          <p className={styles.clubMini}>Dołącz do Clothiq Club</p>
          <h2>Otrzymuj informacje o nowych kolekcjach i promocjach.</h2>
          <p>
            Zapisz się do newslettera i bądź pierwsza/y, która/y zobaczy nowe
            dropy.
          </p>

          <form className={styles.clubForm}>
            <input type='email' placeholder='Twój adres e-mail' />
            <button type='button'>Zapisz się</button>
          </form>
        </div>

        <div className={styles.clubRight}></div>
      </section>
    </>
  );
}
