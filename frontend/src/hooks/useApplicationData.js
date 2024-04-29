import React, { useReducer, useEffect } from 'react';
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_PHOTO_DETAILS: 'CLOSE_PHOTO_DETAILS',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
  GET_FAVORITES: 'GET_FAVORITES'
};

const INITIAL_STATE = { favorites: [], viewModal: false, photoData: [], topicData: []};

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
    case 'GET_FAVORITES':
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
  
  const updateToFavPhotoIds = (photo) => dispatch({ type: !state.favorites.map((photo) => photo.id).includes(photo.id) ? ACTIONS.FAV_PHOTO_ADDED : ACTIONS.FAV_PHOTO_REMOVED, payload: photo });

  const photoArray = [];
  state.photoData.map((photo) => state.favorites.includes(photo.id) && photoArray.push(photo));

  const showFavorites = () => dispatch({ type: ACTIONS.GET_FAVORITES, payload: state.favorites });

  return {
    state,
    updateToFavPhotoIds,
    onPhotoSelect,
    onClosePhotoDetailsModal,
    onLoadTopic,
    showFavorites
  };
};

export default useApplicationData;