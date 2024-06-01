import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const topics = props.topics
  
  return (  
    <div className={"top-nav-bar__topic-list " + props.darkMode}>
      {topics.map(topic => <div key={topic.id} className={"topic-list--item " + props.darkMode}><TopicListItem id={topic.id} data={topic} darkMode={props.darkMode} setTopic={props.setTopic}/></div>)}
    </div>

  );
};

export default TopicList;
