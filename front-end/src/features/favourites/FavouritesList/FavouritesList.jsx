import { CenteredContent } from '../../../shared/ui/CenteredContent/CenteredContent';
import { FavouriteProduct } from '../FavouriteProduct/FavouriteProduct';
import styles from './FavouritesList.module.css';

export function FavouritesList({ favourites }) {
  return (
    <CenteredContent>
      <section className={styles.favouritesList}>
        <div className={styles.header}>
          <p>Twoja lista</p>
          <h2>Ulubione produkty</h2>
          <span>Zapisane produkty, do których możesz wrócić później.</span>
        </div>

        {favourites.length === 0 ? (
          <div className={styles.empty}>
            <h3>Brak ulubionych produktów</h3>
            <p>Dodaj produkty do ulubionych, aby zobaczyć je w tym miejscu.</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {favourites.map((favourite) => {
              return (
                <FavouriteProduct key={favourite.id} favourite={favourite} />
              );
            })}
          </div>
        )}
      </section>
    </CenteredContent>
  );
}
