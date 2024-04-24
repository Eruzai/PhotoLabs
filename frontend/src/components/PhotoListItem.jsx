import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ data, openModal, favorites, toggleFavorite }) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton photoID={data.id} favorites={favorites} toggleFavorite={toggleFavorite}/>
      <img onClick={() => openModal(data)} className="photo-list__image" src={data.urls.regular} alt="photograph" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={data.user.profile} alt="profile image" />
        <div className="photo-list__user-info">
          <div>{data.user.username}</div>
          <div className="photo-list__user-location">{data.location.city}, {data.location.country}</div>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
