import styles from './Photos.module.css';
import { FlexContainer } from '../FlexContainer/FlexContainer';

export function Photos({ product }) {
  return (
    <FlexContainer>
      <div className={styles.thumbnails}>
        {product.photos.map((photo) => {
          return <img key={photo} src={photo} />;
        })}
      </div>
      <img className={styles.mainPhoto} src={product.photos[0]} />
    </FlexContainer>
  );
}
