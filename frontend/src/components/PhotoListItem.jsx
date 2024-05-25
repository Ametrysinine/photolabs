import React from "react";

import "../styles/PhotoListItem.scss";
import photos from "mocks/photos";



const PhotoListItem = (props) => {
  /* Insert React */
  const photo = props.data;
  return (
    <div key={photo.id} className="photo-list__item">
      <img className="photo-list__image" src={photo.urls.regular} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile} />
        <div className="photo-list__user-info">
          <div>{photo.username}</div>
          <div className="photo-list__user-location">{photo.location.city}, {photo.location.country}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
