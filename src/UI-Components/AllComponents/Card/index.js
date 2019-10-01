import React from "react";


const Card = ({ props ,child}) => {
  console.log(props);
  const { horizontalAlign,verticalAlign, color } = props;
  return (
    <div style={{horizontalAlign: horizontalAlign,verticalAlign:verticalAlign ,color:color}}>
      <label>{props.label}</label>
      {child}
    </div>
  );
};

export default Card;
