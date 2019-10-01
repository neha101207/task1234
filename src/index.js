import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
function Core() {
  return (
    <div>
      <App />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Core />, rootElement);
