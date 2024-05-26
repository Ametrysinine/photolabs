import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import photos from "mocks/photos";
import PhotoListItem from 'components/PhotoListItem';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const modalPhoto = props.modal;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => props.setModal(null)}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__top">
        <div className="photo-details-modal__favButton">
          <PhotoFavButton id={modalPhoto.id} favorites={props.favorites} toggleFavorite={props.toggleFavorite}/>
        </div>
          
        
        <img className="photo-details-modal__image" src={modalPhoto.urls.full} />
          <div className="photo-details-modal__photographer-details">
            <img className="photo-details-modal__photographer-profile" src={modalPhoto.user.profile} />
            <div className="photo-details-modal__photographer-info">
              <div>{modalPhoto.user.name}</div>
              <div className="photo-details-modal__photographer-location">
                {modalPhoto.location.city}, {modalPhoto.location.country}
              </div>
            </div>
          </div>

      </div>

      <div className="photo-details-modal__images">        
        <div>Similar Photos</div>
        <PhotoList photos={Object.values(modalPhoto.similar_photos)} favorites={props.favorites} toggleFavorite={props.toggleFavorite} />
      </div>
    </div>
    /**/
  );
};

export default PhotoDetailsModal;
