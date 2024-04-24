import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


const PhotoList = ({ photos }) => {
  const fullPhotoArray = photos.map((photo) => <PhotoListItem key={photo.id} data={photo}/>);
  return (
    <ul className="photo-list">
      {fullPhotoArray}
    </ul>
  );
};

export default PhotoList;
