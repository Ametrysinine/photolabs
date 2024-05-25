import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const topic = props.data;
  return (
    <div>
      <a>{topic.title}</a>
    </div>
  );
};

export default TopicListItem;
