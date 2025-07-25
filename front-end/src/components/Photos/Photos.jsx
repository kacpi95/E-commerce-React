import styles from './Photos.module.css';
import { FlexContainer } from '../FlexContainer/FlexContainer';
import { useState } from 'react';

export function Photos({ product }) {
  const [currentPhoto, setCurrentPhoto] = useState(product.photos[0]);
  return (
    <FlexContainer>
      <div className={styles.thumbnails}>
        {product.photos.map((photo) => {
          return (
            <img
              className={currentPhoto === photo ? styles.active : ''}
              key={photo}
              src={photo}
              onClick={() => {
                setCurrentPhoto(photo);
              }}
            />
          );
        })}
      </div>
      <img className={styles.mainPhoto} src={currentPhoto} />
    </FlexContainer>
  );
}
