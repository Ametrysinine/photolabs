import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import useApplicationData from "hooks/useApplicationData";

const PhotoListItem = (props) => {
  const photo = props.photo;
  const {setModal} = useApplicationData();

  return (
    <div className="photo-list__item">
        <PhotoFavButton id={photo.id} favorites={props.favorites}/>
      <img className="photo-list__image" src={photo.urls.regular} onClick={() => setModal(photo)}/>
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
