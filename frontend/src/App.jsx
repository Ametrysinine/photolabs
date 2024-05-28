import React, { useEffect } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {state: {favorites, modal, photoData, topicData, topic}, setModal, closeModal, toggleFavorite, setPhotoData, setTopicData, setTopic} = useApplicationData();
  useEffect(() => {
    // If topic !== null, select only photos related to topic
    fetch(topic ? `/api/topics/photos/${topic}` : `/api/photos/`)
    .then(response => response.json())
    .then(data => setPhotoData(data));
  }, [topic]);

  useEffect(() => {
    fetch(`/api/topics/`)
    .then(response => response.json())
    .then(data => setTopicData(data));
  }, []);





  return (
    <div className="App">
      <HomeRoute photos={photoData} topics={topicData} favorites={favorites} setModal={setModal} toggleFavorite={toggleFavorite} setTopic={setTopic}/>
      {modal && <PhotoDetailsModal favorites={favorites} modal={modal} closeModal={closeModal} toggleFavorite={toggleFavorite}/>}
    </div>
  );
};

export default App;
