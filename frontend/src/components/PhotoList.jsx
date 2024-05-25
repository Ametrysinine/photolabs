import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import photos from "mocks/photos";

const PhotoList = (props) => {

  return (
    <ul className="photo-list">
      {photos.map(photo => <li key={photo.id}><PhotoListItem favorites={props.favorites} toggleFavorite={props.toggleFavorite} photo={photo}/></li>)}
    </ul>
  );
};

export default PhotoList;
