import React, { useEffect } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {state: {favorites, modal, photoData, topicData}, setModal, closeModal, toggleFavorite, setPhotoData, setTopicData} = useApplicationData();
  useEffect(() => {
    fetch(`/api/photos/`)
    .then(response => response.json())
    .then(data => setPhotoData(data));

    fetch(`/api/topics/`)
    .then(response => response.json())
    .then(data => setTopicData(data));
  }, []);


  return (
    <div className="App">
      <HomeRoute photos={photoData} topics={topicData} favorites={favorites} setModal={setModal} toggleFavorite={toggleFavorite}/>
      {modal && <PhotoDetailsModal favorites={favorites} modal={modal} closeModal={closeModal} toggleFavorite={toggleFavorite}/>}
    </div>
  );
};

export default App;
