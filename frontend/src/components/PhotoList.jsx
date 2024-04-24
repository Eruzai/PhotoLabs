import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


const PhotoList = ({ photos }) => {
  const fullPhotoArray = photos.map((photo, index) => <PhotoListItem key={index} data={photo}/>);
  return (
    <ul className="photo-list">
      {fullPhotoArray}
    </ul>
  );
};

export default PhotoList;
