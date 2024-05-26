import React, {useState} from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoList from 'components/PhotoList';
import './App.scss';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from "mocks/photos";
import useApplicationData from 'hooks/useApplicationData';
// Note: Rendering a single component to build components in isolation
const App = () => {
  const {state, toggleFavorite, setModal} = useApplicationData();
  console.log(state);
  return (
    <div className="App">
      <HomeRoute photos={photos} favorites={state.favorites} toggleFavorite={toggleFavorite} setModal={setModal}/>
      {state.modal && <PhotoDetailsModal favorites={state.favorites} toggleFavorite={toggleFavorite} modal={state.modal} setModal={setModal}/>}
    </div>
  );
};

export default App;
