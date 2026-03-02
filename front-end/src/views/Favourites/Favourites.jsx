import { useLoaderData } from 'react-router-dom';
import { FavouritesList } from '../../features/favourites/FavouritesList/FavouritesList';

export function Favourites() {
  const favouriteProducts = useLoaderData();

  return <FavouritesList favourites={favouriteProducts} />;
}
