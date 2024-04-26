import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ loadTopic, openModal, photos, topics, favorites, toggleFavorite}) => {

  return (
    <div className="home-route">
      <TopNavigation loadTopic={loadTopic} topics={topics} favorites={favorites}/>
      <PhotoList photos={photos} openModal={openModal} favorites={favorites} toggleFavorite={toggleFavorite}/>
    </div>
  );
};

export default HomeRoute;
