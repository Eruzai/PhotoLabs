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

  return (
    <div className="App">
      <HomeRoute openModal={openModal} photos={photos} topics={topics}/>
      {viewModal && <PhotoDetailsModal photoData={viewModal} closeModal={closeModal}/>}
    </div>
  );
};

export default App;
