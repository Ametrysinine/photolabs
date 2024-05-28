import { useReducer } from "react";
export const ACTIONS = {
  SET_MODAL: 'SET_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SET_TOPIC: 'SET_TOPIC'
};

const useApplicationData = function() {

  const reducer = function(state, action) {

    switch (action.type) {
      case ACTIONS.SET_MODAL:
        return { ...state, modal: action.payload };

      case ACTIONS.CLOSE_MODAL:
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
        return ({ ...state, photoData: action.payload });

      case ACTIONS.SET_TOPIC_DATA:
        return ({ ...state, topicData: action.payload });

      case ACTIONS.SET_TOPIC:
        return ({ ...state, topic: action.payload});

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    // Modal state: current image in modal view, false if no modal open
    modal: false,
    favorites: [],
    photoData: [],
    topicData: [],
    topic: null
  });


  const setModal = (photo) => dispatch({ type: ACTIONS.SET_MODAL, payload: photo });
  const closeModal = () => dispatch({ type: ACTIONS.CLOSE_MODAL });
  const toggleFavorite = (id) => dispatch({ type: ACTIONS.TOGGLE_FAVORITE, payload: id });
  const setPhotoData = (fetchResult) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: fetchResult });
  const setTopicData = (fetchResult) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: fetchResult });
  const setTopic = (id) => dispatch({ type: ACTIONS.SET_TOPIC, payload: id});



  return { state, setModal, closeModal, setPhotoData, setTopicData, toggleFavorite, setTopic };
};

export default useApplicationData;