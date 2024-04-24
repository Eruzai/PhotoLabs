import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, openModal, favorites, setFavorite, removeFavorite }) => {
  const fullPhotoArray = photos.map((photo) => <PhotoListItem key={photo.id} data={photo} openModal={openModal} favorites={favorites} setFavorite={setFavorite} removeFavorite={removeFavorite}/>);
  return (
    <ul className="photo-list">
      {fullPhotoArray}
    </ul>
  );
};

export default PhotoList;
