import React from "react";

const Button = ({ props, onSubmit }) => {
  return (
    <button
      onClick={e => {
        onSubmit(e);
      }}
    >
      {props.label}
    </button>
  );
};

export default Button;
