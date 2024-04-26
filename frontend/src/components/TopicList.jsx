import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ loadTopic, topics }) => {
  const topicListArray = topics.map((topic) => <TopicListItem key={topic.id} id={topic.id} loadTopic={loadTopic} data={topic}/>);
  return (
    <div className="top-nav-bar__topic-list">
      {topicListArray}
    </div>
  );
};

export default TopicList;
