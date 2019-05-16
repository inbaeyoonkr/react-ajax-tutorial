import React from "react";
import { Button } from "semantic-ui-react";
import "./Navigate.css";

const Navigate = ({ onClick, postId, disabled }) => (
  <div className="Navigate">
    <Button
      color="teal"
      content="Previous"
      icon="left arrow"
      labelPosition="left"
      onClick={() => onClick("Prev")}
      disabled={disabled}
    />
    <div className="Navigate-page-num">{postId}</div>
    <Button
      color="teal"
      icon="right arrow"
      content="Next"
      labelPosition="right"
      className="Navigate-right-button"
      onClick={() => onClick("Next")}
      disabled={disabled}
    />
  </div>
);

export default Navigate;
