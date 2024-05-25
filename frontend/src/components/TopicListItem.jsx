import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = (props) => {
  const topic = props.data;
  return (
    <div key={topic.id} className={"topic-list--item"}>
      <a>{topic.title}</a>
    </div>
  );
};

export default TopicListItem;
