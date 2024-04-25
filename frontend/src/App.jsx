import React from 'react'; 
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import './App.scss';

const App = () => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute openModal={onPhotoSelect} photos={photos} topics={topics} favorites={state.favorites} toggleFavorite={updateToFavPhotoIds}/>
      {state.viewModal && <PhotoDetailsModal photoData={state.viewModal} closeModal={onClosePhotoDetailsModal} favorites={state.favorites} toggleFavorite={updateToFavPhotoIds}/>}
    </div>
  );
};

export default App;
