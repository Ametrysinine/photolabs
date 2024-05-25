import React, {useState} from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoList from 'components/PhotoList';
import './App.scss';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <HomeRoute setModal={setModal}/>
      {modal && <PhotoDetailsModal setModal={setModal}/>}
    </div>
  );
};

export default App;
