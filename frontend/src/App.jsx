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
  // Modal state: current image in modal view, false if no modal
  const [modal, setModal] = useState(false);

  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = function(id) {
    const newFavorites = [...favorites];
    const index = newFavorites.indexOf(id);

    // Add or remove number from favorites array
    if (index === -1) {
      newFavorites.push(id);
    } else (newFavorites.splice(index, 1));

    setFavorites(newFavorites);
  };

  return (
    <div className="App">
      <HomeRoute photos={photos} favorites={favorites} toggleFavorite={toggleFavorite} setModal={setModal}/>
      {modal && <PhotoDetailsModal favorites={favorites} toggleFavorite={toggleFavorite} modal={modal} setModal={setModal}/>}
    </div>
  );
};

export default App;
