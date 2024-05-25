import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  /* Insert React */
  return (
    <div className="photo-list__item">
      <img className="photo-list__image" id={props.id} src={props.imageSource} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" id={props.id + 'p'} src={props.profile} />
        <div className="photo-list__user-info">
          <div>{props.username}</div>
          <div className="photo-list__user-location">{props.location.city}, {props.location.country}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
