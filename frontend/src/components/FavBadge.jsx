import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ favorites, showFavorites }) => {
  const isFavPhotoExist = favorites.length > 0;

  return (
    <div onClick={showFavorites} className='fav-badge'>
      <FavIcon selected={isFavPhotoExist} displayAlert={!!isFavPhotoExist}/>
    </div>
  ) 
};

export default FavBadge;