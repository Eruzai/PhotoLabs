import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, setFavorite, removeFavorite }) => {
  const fullPhotoArray = photos.map((photo) => <PhotoListItem key={photo.id} data={photo} setFavorite={setFavorite} removeFavorite={removeFavorite}/>);
  return (
    <ul className="photo-list">
      {fullPhotoArray}
    </ul>
  );
};

export default PhotoList;
