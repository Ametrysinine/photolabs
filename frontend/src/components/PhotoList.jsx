import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const photos = props.photos;
  return (
    <ul className="photo-list">
      {photos.map(photo => <li key={photo.id}><PhotoListItem favorites={props.favorites} setModal={props.setModal}
      toggleFavorite={props.toggleFavorite} photo={photo}/></li>)}
    </ul>
  );
};

export default PhotoList;
