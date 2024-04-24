import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import './App.scss';

const App = () => {
  const [viewModal, setViewModal] = useState(false);
  const openModal = (data) => setViewModal(data);
  const closeModal = () => setViewModal(false);

  const [favorites, setFavorites] = useState([]);
  const setFavorite = (photoID) => {
    if (!favorites.includes(photoID)) {
      setFavorites([...favorites, photoID]);
    }
  };
  const removeFavorite = (photoID) => {
    setFavorites(favorites.filter(id => id !== photoID));
  };

  return (
    <div className="App">
      <HomeRoute openModal={openModal} photos={photos} topics={topics} favorites={favorites} setFavorite={setFavorite} removeFavorite={removeFavorite}/>
      {viewModal && <PhotoDetailsModal photoData={viewModal} closeModal={closeModal} favorites={favorites} setFavorite={setFavorite} removeFavorite={removeFavorite}/>}
    </div>
  );
};

export default App;
