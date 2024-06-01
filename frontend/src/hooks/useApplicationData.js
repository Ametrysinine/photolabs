import { useReducer } from "react";
export const ACTIONS = {
  SET_MODAL: 'SET_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SET_TOPIC: 'SET_TOPIC',
  TOGGLE_DARKMODE: 'TOGGLE_DARKMODE'
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
        const photoId = Number(action.payload);
        const index = newFavorites.indexOf(photoId);

        if (index === -1) {
          newFavorites.push(photoId);
        } else {
          newFavorites.splice(index, 1);
        };

        return { ...state, favorites: newFavorites };

      case ACTIONS.TOGGLE_DARKMODE:
        const darkMode = (state.darkMode === "light" ? "dark" : "light");
        console.log(darkMode)
        const newState = {...state};
        newState.darkMode = darkMode;

        return newState;

      case ACTIONS.SET_PHOTO_DATA:
        return ({ ...state, photoData: action.payload });

      case ACTIONS.SET_TOPIC_DATA:
        return ({ ...state, topicData: action.payload });

      case ACTIONS.SET_TOPIC:
        return ({ ...state, topic: action.payload });

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
    topic: null,
    darkMode: "light"
  });

  const stateFunctions = {
    setModal: (photo) => dispatch({ type: ACTIONS.SET_MODAL, payload: photo }),
    closeModal: () => dispatch({ type: ACTIONS.CLOSE_MODAL }),
    toggleFavorite: (id) => dispatch({ type: ACTIONS.TOGGLE_FAVORITE, payload: id }),
    setPhotoData: (fetchJson) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: fetchJson }),
    setTopicData: (fetchJson) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: fetchJson }),
    setTopic: (id) => dispatch({ type: ACTIONS.SET_TOPIC, payload: id }),
    toggleDarkMode: () => dispatch({ type: ACTIONS.TOGGLE_DARKMODE})
  };

  return { state, stateFunctions };
};

export default useApplicationData;