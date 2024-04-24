import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ openModal, photos, topics, favorites, setFavorite, removeFavorite}) => {

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favorites={favorites}/>
      <PhotoList photos={photos} openModal={openModal} favorites={favorites} setFavorite={setFavorite} removeFavorite={removeFavorite}/>
    </div>
  );
};

export default HomeRoute;
