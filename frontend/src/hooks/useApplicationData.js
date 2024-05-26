import React, { useState } from "react";

const useApplicationData = function() {
  const [state, setState] = useState({
    // Modal state: current image in modal view, false if no modal open
    modal: false,
    favorites: []
  });

  const setModal = function(val) {
    const newState = { ...state };
    newState.modal = val;
    setState(newState);
  };

  const toggleFavorite = function(id) {
    const newState = { ...state };
    const newFavorites = newState.favorites;

    const index = newFavorites.indexOf(id);

    // Add or remove number from favorites array
    if (index === -1) {
      newFavorites.push(id);
    } else (newFavorites.splice(index, 1));

    setState(newState);
  };

  return {state, setModal, toggleFavorite};
};

export default useApplicationData;