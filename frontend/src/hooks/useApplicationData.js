import React, { useReducer, useEffect } from 'react';
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_PHOTO_DETAILS: 'CLOSE_PHOTO_DETAILS',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS'
};

const INITIAL_STATE = { favorites: [], viewModal: false, photoData: [], topicData: [] };

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
    case 'SET_PHOTO_DATA':
    case 'GET_PHOTOS_BY_TOPICS':
      return {...state, photoData: action.payload};
    case 'SET_TOPIC_DATA':
      return {...state, topicData: action.payload};

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
    }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    fetch('/api/photos')
    .then(res => res.json())
    .then(data => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data}));
  }, [])

  useEffect(() => {
    fetch('/api/topics')
    .then(res => res.json())
    .then(data => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data}));
  }, [])

  const onLoadTopic = (id) => {
    fetch(`/api/topics/photos/${id}`)
    .then(res => res.json())
    .then(data => dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data}));
  }
  
  const onPhotoSelect = (data) => dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: data });
  const onClosePhotoDetailsModal = () => dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS });
  
  const updateToFavPhotoIds = (photoID) => dispatch({ type: !state.favorites.includes(photoID) ? ACTIONS.FAV_PHOTO_ADDED : ACTIONS.FAV_PHOTO_REMOVED, payload: photoID });

  return {
    state,
    updateToFavPhotoIds,
    onPhotoSelect,
    onClosePhotoDetailsModal,
    onLoadTopic
  };
};

export default useApplicationData;