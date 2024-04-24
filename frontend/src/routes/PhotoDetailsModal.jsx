import React from 'react';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoDetailsModal.scss'

const PhotoDetailsModal = ({ closeModal, photoData, favorites, toggleFavorite }) => {
  console.log(photoData);
  const similarPhotosArray = Object.values(photoData.similar_photos)
  console.log(similarPhotosArray);

  return (
    <div className="photo-details-modal">
      <button onClick={closeModal} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoFavButton photoID={photoData.id} favorites={favorites} toggleFavorite={toggleFavorite}/>
      <img className="photo-details-modal__image" src={photoData.urls.full} alt="full size image"/>
      <header className="photo-details-modal__header">
        <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={photoData.user.profile} alt="profile image"/>
          <div className="photo-details-modal__photographer-info">
            <div>{photoData.user.username}</div>
            <div className="photo-details-modal__photographer-location">{photoData.location.city}, {photoData.location.country}</div>
          </div>
        </div>
      </header>
      <PhotoList photos={similarPhotosArray} favorites={favorites} toggleFavorite={toggleFavorite}/>
    </div>
  )
};

export default PhotoDetailsModal;
