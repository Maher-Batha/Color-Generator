import React, { useState } from "react";

const Form = ({ addColor }) => {
  const [color, setColor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };
  return (
    <div className="form-section">
      <h4 className="form-title">color generator</h4>
      <form onSubmit={handleSubmit} className="color-form">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#d87d4a"
        />
        <button
          type="submit"
          style={{ background: color }}
          className="submit-btn"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
