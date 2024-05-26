import React, { useState } from "react";

const useApplicationData = function() {
  // Modal state: current image in modal view, false if no modal
  const [modal, setModal] = useState(false);

  const [favorites, setFavorites] = useState([]);
  console.log('FAVORITES' + favorites);
  
  const toggleFavorite = function(id) {
    const newFavorites = [...favorites];
    const index = newFavorites.indexOf(id);

    // Add or remove number from favorites array
    if (index === -1) {
      newFavorites.push(id);
    } else (newFavorites.splice(index, 1));
    setFavorites(newFavorites);

    
  };

  return {
    modal,
    favorites,
    toggleFavorite,
    setModal
  };
};

export default useApplicationData;