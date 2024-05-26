import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import useApplicationData from 'hooks/useApplicationData';
function PhotoFavButton(props) {
  const {toggleFavorite} = useApplicationData();

  return (
    <div className="photo-list__fav-icon">
      <div onClick={() => toggleFavorite(props.id)} className="photo-list__fav-icon-svg">
        <FavIcon selected={!!props.favorites.includes(props.id)}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;