import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  /* Insert React */
  return (<div className="PhotoListItem">
    <img id={props.id} src={props.imageSource}></img>
    <img id={props.id + 'p'} src={props.profile}></img>
    <br/>
    <username>{props.username}</username>
    <br/>
    <location>{props.location.city}, {props.location.country}</location>
  </div>

  );
};

export default PhotoListItem;
