import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ id, loadTopic, data }) => {
  return (
    <div onClick={() => loadTopic(id)} className="topic-list__item">
      <span>
        {data.title}
      </span>
    </div>
  );
};

export default TopicListItem;
