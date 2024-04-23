import React from 'react';

import PhotoList from './components/PhotoList';
import './App.scss';

// const photos = new Array(3).fill(null);
// const mappedPhotos = photos.map((_, index) => <PhotoListItem key={index} data={sampleDataForPhotoListItem}/>);

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <PhotoList className="photo-list" />
    </div>
  );
};

export default App;
