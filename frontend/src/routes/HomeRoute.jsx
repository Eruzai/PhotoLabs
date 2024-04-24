import React, { useState } from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics }) => {
  const [favorites, setFavorites] = useState([]);

  const setFavorite = (photoID) => {
    if (!favorites.includes(photoID)) {
      setFavorites([...favorites, photoID]);
    }
  };

  const removeFavorite = (photoID) => {
    setFavorites(favorites.filter(id => id !== photoID));
  };

  let isFavPhotoExist = false;
  if(favorites.length > 0) {
    isFavPhotoExist = true;
  } else {
    isFavPhotoExist = false;
  };

  console.log(favorites); // prints two arrays for some reason.

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={isFavPhotoExist}/>
      <PhotoList photos={photos} setFavorite={setFavorite} removeFavorite={removeFavorite}/>
    </div>
  );
};

export default HomeRoute;
