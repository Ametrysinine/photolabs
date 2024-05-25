import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import photos from "mocks/photos";
import PhotoListItem from 'components/PhotoListItem';

const PhotoDetailsModal = (props) => {
  const {urls, similar_photos} = photos[props.modal];
  console.log(urls.full, similar_photos)

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => props.setModal(null)}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
