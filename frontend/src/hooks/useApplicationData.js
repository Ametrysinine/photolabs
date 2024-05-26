import { useReducer } from "react";
export const ACTIONS = {
  SET_MODAL: 'SET_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE'
}

const useApplicationData = function() {

  const reducer = function(state, action) {

    switch (action.type) {
      case ACTIONS.SET_MODAL:
        console.log('Setting modal: ' + action.value);
        return { ...state, modal: action.value };

      case ACTIONS.CLOSE_MODAL:
        console.log('Closing modal.');
        return { ...state, modal: null };

      case ACTIONS.TOGGLE_FAVORITE:
        const newFavorites = [...state.favorites];
        const index = newFavorites.indexOf(action.value);

        if (index === -1) {
          newFavorites.push(action.value);          
          
          console.log('Pushing value ' + action.value + ' to favorites array');
          console.log('Resulting array:' + newFavorites);

        } else {
          newFavorites.splice(index, 1);

          console.log('Removing value ' + action.value + ' from favorites array');
          console.log('Resulting array:' + newFavorites);
        };
        

        return { ...state, favorites: newFavorites };
      default:
        console.log('Invalid action type: ' + action.type);
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    // Modal state: current image in modal view, false if no modal open
    modal: false,
    favorites: [11, 12, 13]
  });

  const setModal = (photo) => dispatch({type: ACTIONS.SET_MODAL, value: photo})
  const closeModal = () => dispatch({type: ACTIONS.CLOSE_MODAL})
  const toggleFavorite = (id) => dispatch({type: ACTIONS.TOGGLE_FAVORITE, value: id})



return { state, setModal, closeModal, toggleFavorite };
};

export default useApplicationData;