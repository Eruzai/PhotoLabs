import React, { useReducer } from 'react';
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_PHOTO_DETAILS: 'CLOSE_PHOTO_DETAILS'
};

const INITIAL_STATE = { favorites: [], viewModal: false };

function reducer(state, action) {
  switch (action.type) {
    case 'FAV_PHOTO_ADDED':
      return {...state, favorites: [...state.favorites, action.payload]};
    case 'FAV_PHOTO_REMOVED':
      return {...state, favorites: state.favorites.filter(id => id !== action.payload)};
    case 'DISPLAY_PHOTO_DETAILS':
      return {...state, viewModal: action.payload};
    case 'CLOSE_PHOTO_DETAILS':
      return {...state, viewModal: null};

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
    }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const onPhotoSelect = (data) => dispatch({ type: 'DISPLAY_PHOTO_DETAILS', payload: data });
  const onClosePhotoDetailsModal = () => dispatch({ type: 'CLOSE_PHOTO_DETAILS' });
  
  const updateToFavPhotoIds = (photoID) => dispatch({ type: !state.favorites.includes(photoID) ? 'FAV_PHOTO_ADDED' : 'FAV_PHOTO_REMOVED', payload: photoID });

  return {
    state,
    updateToFavPhotoIds,
    onPhotoSelect,
    onClosePhotoDetailsModal
  };
};

export default useApplicationData;