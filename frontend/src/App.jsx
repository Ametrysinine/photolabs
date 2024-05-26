import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from "mocks/photos";
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {state: {favorites, modal}, setModal, closeModal, toggleFavorite} = useApplicationData();
  return (
    <div className="App">
      <HomeRoute photos={photos} favorites={favorites} setModal={setModal} toggleFavorite={toggleFavorite}/>
      {modal && <PhotoDetailsModal favorites={favorites} modal={modal} closeModal={closeModal} toggleFavorite={toggleFavorite}/>}
    </div>
  );
};

export default App;
