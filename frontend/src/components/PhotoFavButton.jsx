import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ favorites, setFavorite, removeFavorite, photoID }) {
  let selected = false
  favorites.includes(photoID) ? selected = true : selected = false;

  const toggleFav = () => {
    selected ? removeFavorite(photoID) : setFavorite(photoID);
  }

  return (
    <div className="photo-list__fav-icon">
      <div onClick={toggleFav} className="photo-list__fav-icon-svg">
        <FavIcon selected={selected}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;