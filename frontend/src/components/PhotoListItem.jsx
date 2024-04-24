import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton photoID={props.data.id} favorites={props.favorites} setFavorite={props.setFavorite} removeFavorite={props.removeFavorite}/>
      <img className="photo-list__image" src={props.data.urls.regular} alt="photograph" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.data.user.profile} alt="profile image" />
        <div className="photo-list__user-info">
          <div>{props.data.user.username}</div>
          <div className="photo-list__user-location">{props.data.location.city}, {props.data.location.country}</div>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
