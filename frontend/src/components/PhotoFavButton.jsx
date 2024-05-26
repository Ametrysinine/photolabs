import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const handleClick = () => {
    props.toggleFavorite(props.id);
  }
  return (
    <div className="photo-list__fav-icon">
      <div onClick={handleClick} className="photo-list__fav-icon-svg">
        <FavIcon selected={!!props.favorites.includes(props.id)}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;