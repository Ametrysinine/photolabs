import React, { useState } from "react";

import "../styles/HomeRoute.scss";
import PhotoList from "../components/PhotoList";
import TopNavigation from "../components/TopNavigationBar";
import PhotoDetailsModal from "./PhotoDetailsModal";

const HomeRoute = (props) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = function(id) {
    const newFavorites = [...favorites];
    const index = newFavorites.indexOf(id);

    // Add or remove number from favorites array
    if (index === -1) {
      newFavorites.push(id);
    } else (newFavorites.splice(index, 1));

    console.log('Clicked: ' + id + ' newFavorites ' + newFavorites);
    setFavorites(newFavorites);
  };

  return (
    <div className="home-route">
      <TopNavigation favorites={favorites}/>
      <PhotoList favorites={favorites} setModal={props.setModal} toggleFavorite={toggleFavorite}  />
    </div>
  );
};

export default HomeRoute;