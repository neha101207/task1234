import React from "react";

const TextField = ({ props, onChange }) => {
  let { name } = props;

  if (props.inputType === "text")
    return (
      <div>
        {" "}
        <label>{props.label}</label>
        <input onChange={e => onChange(e.target.value, name)} type="text" />
      </div>
    );

  if (props.inputType === "email")
    return (
      <div>
        <label>{props.label}</label>
        <input onChange={e => onChange(e.target.value, name)} type="email" />
      </div>
    );

  if (props.inputType === "number")
    return (
      <div>
        <label>{props.label}</label>
        <input onChange={e => onChange(e.target.value, name)} type="number" />
      </div>
    );

  if (props.inputType === "password")
    return (
      <div>
        <label>{props.label}</label>
        <input onChange={e => onChange(e.target.value, name)} type="password" />
      </div>
    );

  return null;
};

export default TextField;
