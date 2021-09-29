import React from "react";
import { Text } from "../Text/Text";
import "./RedText.css";

export var RedText = function RedText(props) {
  return React.createElement(Text, {
    className: 'RedText'
  }, props.children);
};
