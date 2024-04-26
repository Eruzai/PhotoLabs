import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigation = ({ loadTopic, topics, favorites }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList loadTopic={loadTopic} topics={topics}/>
      <FavBadge favorites={favorites}/>
    </div>
  )
}

export default TopNavigation;