import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ setFavorite, removeFavorite, photoID }) {
  const [selected, setSelected] = useState(false);
  const toggleFav = () => {
    setSelected(selected ? false : true);
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