import { useReducer } from "react";
export const ACTIONS = {
  SET_MODAL: 'SET_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA'
}

const useApplicationData = function() {

  const reducer = function(state, action) {

    switch (action.type) {
      case ACTIONS.SET_MODAL:
        return { ...state, modal: action.payload };

      case ACTIONS.CLOSE_MODAL:
        console.log('Closing modal.');
        return { ...state, modal: null };

      case ACTIONS.TOGGLE_FAVORITE:
        const newFavorites = [...state.favorites];
        const index = newFavorites.indexOf(action.payload);

        if (index === -1) {
          newFavorites.push(action.payload);          
        } else {
          newFavorites.splice(index, 1);
        };

        return { ...state, favorites: newFavorites };

        case ACTIONS.SET_PHOTO_DATA:
          const newPhoto = {...state}
          return ({ ...newPhoto, photoData: action.payload });
        
        case ACTIONS.SET_TOPIC_DATA:
          const newTopic = {...state}
          return ({ ...newTopic, topicData: action.payload });
  
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    // Modal state: current image in modal view, false if no modal open
    modal: false,
    favorites: [],
    photoData: [],
    topicData: []
  });
  

  const setModal = (photo) => dispatch({type: ACTIONS.SET_MODAL, payload: photo})
  const closeModal = () => dispatch({type: ACTIONS.CLOSE_MODAL})
  const toggleFavorite = (id) => dispatch({type: ACTIONS.TOGGLE_FAVORITE, payload: id})
  const setPhotoData = (fetchResult) => dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: fetchResult})
  const setTopicData = (fetchResult) => dispatch({type: ACTIONS.SET_TOPIC_DATA, payload: fetchResult})



return { state, setModal, closeModal, setPhotoData, setTopicData, toggleFavorite};
};

export default useApplicationData;