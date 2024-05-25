import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const photo = props.photo;
  const handleClick = () => {
    props.setModal(true)
  }
  return (
    <div className="photo-list__item">
        <PhotoFavButton id={photo.id} toggleFavorite={props.toggleFavorite}/>
      <img className="photo-list__image" src={photo.urls.regular} onClick={() => handleClick()}/>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile} />
        <div className="photo-list__user-info">
          <div>{photo.user.name}</div>
          <div className="photo-list__user-location">{photo.location.city}, {photo.location.country}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
