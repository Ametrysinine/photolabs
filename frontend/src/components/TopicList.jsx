import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const topics = props.topics
  return (  
    <div className="top-nav-bar__topic-list">
      {topics.map(topic => <div key={topic.id} className="topic-list--item"><TopicListItem id={topic.id} data={topic} setTopic={props.setTopic}/></div>)}
    </div>

  );
};

export default TopicList;
