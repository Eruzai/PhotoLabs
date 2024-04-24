import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, openModal, favorites, toggleFavorite }) => {
  const fullPhotoArray = photos.map((photo) => <PhotoListItem key={photo.id} data={photo} openModal={openModal} favorites={favorites} toggleFavorite={toggleFavorite}/>);
  return (
    <ul className="photo-list">
      {fullPhotoArray}
    </ul>
  );
};

export default PhotoList;
