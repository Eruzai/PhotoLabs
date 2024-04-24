import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ favorites }) => {
  let isFavPhotoExist = false;
  favorites.length > 0 ? isFavPhotoExist = true : isFavPhotoExist = false;

  return (
    <div className='fav-badge'>
      <FavIcon selected={isFavPhotoExist} displayAlert={!!isFavPhotoExist}/>
    </div>
  ) 
};

export default FavBadge;