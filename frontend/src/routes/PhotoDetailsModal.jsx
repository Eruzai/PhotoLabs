import React from 'react';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoDetailsModal.scss'

const PhotoDetailsModal = ({ closeModal, photoData, favorites, toggleFavorite }) => {
  const similarPhotosArray = Object.values(photoData.similar_photos)

  return (
    <div className="photo-details-modal">
      <button onClick={closeModal} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton photo={photoData} favorites={favorites} toggleFavorite={toggleFavorite}/>
        <img className="photo-details-modal__image" src={photoData.urls.full} alt="full size image"/>
        <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={photoData.user.profile} alt="profile image"/>
          <div className="photo-details-modal__photographer-info">
            <div>
              {photoData.user.username}
            </div>
            <div className="photo-details-modal__photographer-location">
              {photoData.location.city}, {photoData.location.country}
            </div>
          </div>
        </div>
        <header className="photo-details-modal__header">
          Similar Photos
        </header>
        <PhotoList photos={similarPhotosArray} favorites={favorites} toggleFavorite={toggleFavorite}/>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
