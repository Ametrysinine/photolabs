import React, { useState } from "react";

import "../styles/HomeRoute.scss";
import PhotoList from "../components/PhotoList";
import TopNavigation from "../components/TopNavigationBar";
import PhotoDetailsModal from "./PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

const HomeRoute = (props) => {
  

  return (
    <div className="home-route">
      <TopNavigation favorites={props.favorites}/>
      <PhotoList favorites={props.favorites} photos={props.photos}/>
    </div>
  );
};

export default HomeRoute;