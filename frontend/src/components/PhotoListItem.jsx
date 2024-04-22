import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div>
      <img src={props.data.imageSource} alt="photograph" />
      <img src={props.data.profile} alt="profile image" />
      <span>{props.data.username}</span>
      <span>{props.data.location.city} {props.data.location.country}</span>
    </div>
  )
};

export default PhotoListItem;
