import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ favorites, toggleFavorite, photoID }) {
  const selected = favorites.includes(photoID)

  return (
    <div className="photo-list__fav-icon">
      <div onClick={() => toggleFavorite(photoID)} className="photo-list__fav-icon-svg">
        <FavIcon selected={selected}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;