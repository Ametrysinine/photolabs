import React, { useEffect } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const {state: {favorites, modal, photoData, topicData, topic, darkMode}, stateFunctions: {setModal, closeModal, toggleFavorite, setPhotoData, setTopicData, setTopic, toggleDarkMode}} = useApplicationData();
  useEffect(() => {

    // setPhotoData: If topic !== null, select only photos related to topic
    fetch(topic ? `/api/topics/photos/${topic}` : `/api/photos/`)
    .then(response => response.json())
    .then(data => setPhotoData(data));
  }, [topic, darkMode]);

  useEffect(() => {
    fetch(`/api/topics/`)
    .then(response => response.json())
    .then(data => setTopicData(data));
  }, []);

  useEffect(() => {
    console.log('darkening');
  }, [darkMode]);



  return (
    <div className={"App " + darkMode}>
      <HomeRoute photos={photoData} topics={topicData} favorites={favorites} darkMode={darkMode} setModal={setModal} toggleFavorite={toggleFavorite} setTopic={setTopic} toggleDarkMode={toggleDarkMode}/>
      {modal && <PhotoDetailsModal favorites={favorites} modal={modal} darkMode={darkMode} closeModal={closeModal} toggleFavorite={toggleFavorite}/>}
    </div>
  )
};

export default App;
