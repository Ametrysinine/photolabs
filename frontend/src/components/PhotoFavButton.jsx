import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  return (
    <div className="photo-list__fav-icon" onClick={() => props.toggleFavorite(props.id)}>
      <div  
      className="photo-list__fav-icon-svg">
        <FavIcon selected={!!props.favorites.includes(props.id)}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;