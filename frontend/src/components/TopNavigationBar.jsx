import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import DarkModeButton from './DarkModeButton';

const TopNavigation = (props) => {
  return (
    <div className={"top-nav-bar " + props.darkMode}>
      <span className={"top-nav-bar__logo " + props.darkMode}>PhotoLabs</span>
      <TopicList topics={props.topics} setTopic={props.setTopic} darkMode={props.darkMode}/>
      <DarkModeButton toggleDarkMode={props.toggleDarkMode}/>
      <FavBadge isFavPhotoExist={props.favorites.length > 0}/>
    </div>
  )
}

export default TopNavigation;