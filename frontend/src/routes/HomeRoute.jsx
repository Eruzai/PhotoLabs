import React, { useState } from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ openModal, photos, topics }) => {
  const [favorites, setFavorites] = useState([]);

  const setFavorite = (photoID) => {
    if (!favorites.includes(photoID)) {
      setFavorites([...favorites, photoID]);
    }
  };

  const removeFavorite = (photoID) => {
    setFavorites(favorites.filter(id => id !== photoID));
  };

  console.log(favorites); // prints two arrays for some reason.

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favorites={favorites}/>
      <PhotoList photos={photos} openModal={openModal} favorites={favorites} setFavorite={setFavorite} removeFavorite={removeFavorite}/>
    </div>
  );
};

export default HomeRoute;
