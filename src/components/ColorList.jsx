import React from "react";
import SingleColor from "./SingleColor";

const ColorList = ({ colors }) => {
  return (
    <div className="colors">
      {colors.map((item, index) => {
        return <SingleColor key={index} color={item} index={index} />;
      })}
    </div>
  );
};

export default ColorList;
