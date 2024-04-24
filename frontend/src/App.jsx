import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import './App.scss';

const App = () => {
  const [viewModal, setViewModal] = useState(false);
  const setModalTrue = () => setViewModal(true);

  return (
    <div className="App">
      <HomeRoute setModalTrue={setModalTrue} photos={photos} topics={topics}/>
      {viewModal && <PhotoDetailsModal />}
    </div>
  );
};

export default App;
