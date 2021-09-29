import React from "react";
import "./Text.css";
export var Text = function Text(props) {
  return React.createElement('div', {
    className: 'Text ' + props.className
  }, props.children);
};