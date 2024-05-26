import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import useApplicationData from "hooks/useApplicationData";

const PhotoList = (props) => {
  const photos = props.photos;

  return (
    <ul className="photo-list">
      {photos.map(photo => <li key={photo.id}><PhotoListItem favorites={props.favorites} 
      photo={photo}/></li>)}
    </ul>
  );
};

export default PhotoList;
