import React from "react";

const Cards = ({ props, child }) => {
  const { cards = [] } = props;

  return cards.map(car => {
    return (
      <span
        className=""
        style={{
          
          horizontalAlign: car.horizontalAlign,
          verticalAlign: car.verticalAlign,
          color: car.color
        }}
      >
        <label>{car.label}</label>
        {child}
      </span>
    );
  });
};

export default Cards;
