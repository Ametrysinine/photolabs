import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import topics from "mocks/topics";

const TopicList = () => {
  return (  
    <div className="top-nav-bar__topic-list">
      {topics.map(topic => <div key={topic.id} className="topic-list--item"><TopicListItem data={topic} /></div>)}
    </div>

  );
};

export default TopicList;
