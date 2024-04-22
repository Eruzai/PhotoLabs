import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div>
      <img src={props.imageSource} alt="photograph" />
      <img src={props.profile} alt="profile image" />
      <span>{props.username}</span>
      <span>{props.city} {props.country}</span>
    </div>
  )
};

export default PhotoListItem;
