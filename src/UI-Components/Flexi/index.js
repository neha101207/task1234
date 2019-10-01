import React from "react";


const Flexi = ({ onSubmit, config, onChange }) => {
  let { items } = config;
  const displayFields = items => {
    return items.map(item => {
      return displayField(item);
    });
  };
   
  const displayField = item => {
    let child = [];
    if (item.children) child = displayFields(item.children.items);
    let Components = require(`../AllComponents/${item.type}`).default;

    return (
      <Components
        props={item.props}
        child={child}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    );
  };

  return <div>{displayFields(items)}</div>;
};
export default Flexi;

//  if (item.type === "Card") return <Card props={item.props} child={child}/>;
//  if (item.type === "Cards") return <Cards props={item.props} child={child}/>;
//  if (item.type === "Header") return <Header props={item.props} />;
//  if (item.type === "TextField")
//    return <TextField props={item.props} onChange={onChange} />;
//  if (item.type === "Button")
//    return <Button props={item.props} onSubmit={onSubmit} />;
// if (item.type === "RadioGroup")
//  return <RadioGroup props={item.props} onChange={onChange} />;\]098765 +++++++++++
