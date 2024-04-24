import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ favorites }) => {
  const isFavPhotoExist = favorites.length > 0;

  return (
    <div className='fav-badge'>
      <FavIcon selected={isFavPhotoExist} displayAlert={!!isFavPhotoExist}/>
    </div>
  ) 
};

export default FavBadge;