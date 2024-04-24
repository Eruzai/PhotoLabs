import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topics }) => {
  const topicListArray = topics.map((topic, index) => <TopicListItem key={index} data={topic}/>);
  return (
    <div className="top-nav-bar__topic-list">
      {topicListArray}
    </div>
  );
};

export default TopicList;
