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

  return (
    <div className="App">
      <HomeRoute photos={photos} setModal={setModal}/>
      {modal && <PhotoDetailsModal modal={modal} setModal={setModal}/>}
    </div>
  );
};

export default App;
