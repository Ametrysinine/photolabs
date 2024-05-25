import React, { useState } from "react";

import "../styles/HomeRoute.scss";
import PhotoList from "./PhotoList";
import TopNavigation from "./TopNavigationBar";

const HomeRoute = () => {
  const [favorites, setFavorites] = useState({keys:'values'});

  const toggleFavorite = function(id) {
    const newFavorites = {...favorites};

    newFavorites[id] = !newFavorites[id];

    console.log('Clicked: ' + id + ' newFavorites ' + Object.keys(newFavorites) + ' ' + Object.values(newFavorites));
    setFavorites(newFavorites);
  };


  return (
    <div className="home-route">
      <TopNavigation />
      <PhotoList favorites={favorites} toggleFavorite={toggleFavorite}  />
    </div>
  );
};

export default HomeRoute;