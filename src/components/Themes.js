import React from "react";

function Themes(props) {
  return (
    <button
      className={`color-btns btn-${props.color}`}
      onClick={props.toggleMode}
    ></button>
  );
}

export default Themes;
