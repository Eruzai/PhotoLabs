import React, { useState } from 'react';

const useApplicationData = () => {
  const [viewModal, setViewModal] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const onPhotoSelect = (data) => setViewModal(data);
  const onClosePhotoDetailsModal = () => setViewModal(false);
  
  const updateToFavPhotoIds = (photoID) => {!favorites.includes(photoID) ? setFavorites([...favorites, photoID]) : setFavorites(favorites.filter(id => id !== photoID))};

  return {
    state: {viewModal, favorites},
    updateToFavPhotoIds,
    onPhotoSelect,
    onClosePhotoDetailsModal
  };
};

export default useApplicationData;