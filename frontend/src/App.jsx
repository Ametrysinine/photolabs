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
  // Modal state: current image in modal view, false if no modal
  const {modal, favorites} = useApplicationData();
  console.log('MODAL ' + modal)
  return (
    <div className="App">
      <HomeRoute favorites={favorites} photos={photos} />
      {modal && <PhotoDetailsModal favorites={favorites} modal={modal}/>}
    </div>
  );
};

export default App;
