import React from "react";
import ReactDOM from "react-dom";

const HelloMessage = props => (
    <div>Hello {props.name}</div>
);

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Dave" />, mountNode);
