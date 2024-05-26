import React, {useState} from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoList from 'components/PhotoList';
import './App.scss';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from "mocks/photos";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [state, setState] = useState({
      // Modal state: current image in modal view, false if no modal open
    modal: false,
    favorites: []
  })

  const setModal = function(val) {
    const newState = {...state};
    newState.modal = val;
    setState(newState);
  }




  const toggleFavorite = function(id) {
    const newState = {...state}
    const newFavorites = newState.favorites;

    const index = newFavorites.indexOf(id);

    // Add or remove number from favorites array
    if (index === -1) {
      newFavorites.push(id);
    } else (newFavorites.splice(index, 1));
 
    setState(newState);
  };

  return (
    <div className="App">
      <HomeRoute photos={photos} favorites={state.favorites} toggleFavorite={toggleFavorite} setModal={setModal}/>
      {state.modal && <PhotoDetailsModal favorites={state.favorites} toggleFavorite={toggleFavorite} modal={state.modal} setModal={setModal}/>}
    </div>
  );
};

export default App;
