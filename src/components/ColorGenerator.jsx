import React, { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

const ColorGenerator = () => {
  const [colors, setColors] = useState(new Values("#d87d4a").all(1));
  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(1);
      setColors(newColors);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="container color-generator-project">
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </div>
  );
};

export default ColorGenerator;
