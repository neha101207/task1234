import React from "react";

const RadioGroup = ({ props, onChange }) => {
  const { label } = props;
  console.log(props);
  return (
    <div>
      <form>
        <label>{props.label}</label>
        <br />
        {props.options.map(el => (
          <span>
            {el.label}
            <input
              onChange={e => onChange(e.target.value, label)}
              type="radio"
              value={el.label}
            />
          </span>
        ))}
      </form>
    </div>
  );
};
export default RadioGroup;
