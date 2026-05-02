import { useState } from 'react';
import { FlexContainer } from '../../../shared/ui/FlexContainer/FlexContainer';
import styles from './Photos.module.css';
import { getImageUrl } from '../../../utils/getImageUrl';

export function Photos({ product }) {
  const photos = product?.photos ?? [];

  const [currentPhoto, setCurrentPhoto] = useState(getImageUrl(photos[0]?.url));

  return (
    <FlexContainer>
      <div className={styles.thumbnails}>
        {photos.map((photo) => {
          const fullUrl = getImageUrl(photo.url);

          return (
            <img
              className={`${currentPhoto === fullUrl ? styles.active : ''}`}
              key={photo.id ?? photo.url}
              src={fullUrl}
              alt=''
              onClick={() => setCurrentPhoto(fullUrl)}
            />
          );
        })}
      </div>

      <img className={styles.mainPhoto} src={currentPhoto} alt='' />
    </FlexContainer>
  );
}
