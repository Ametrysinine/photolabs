import React from "react";

import "../styles/HomeRoute.scss";
import PhotoList from "../components/PhotoList";
import TopNavigation from "../components/TopNavigationBar";

const  HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} favorites={props.favorites} setTopic={props.setTopic}/>
      <PhotoList favorites={props.favorites} photos={props.photos} setModal={props.setModal} toggleFavorite={props.toggleFavorite}/>
    </div>
  );
};

export default HomeRoute;