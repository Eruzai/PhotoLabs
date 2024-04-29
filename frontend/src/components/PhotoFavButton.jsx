import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ favorites, toggleFavorite, photo }) {
  const selected = favorites.map((photo) => photo.id).includes(photo.id);

  return (
    <div className="photo-list__fav-icon">
      <div onClick={() => toggleFavorite(photo)} className="photo-list__fav-icon-svg">
        <FavIcon selected={selected}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;